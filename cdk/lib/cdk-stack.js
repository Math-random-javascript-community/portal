const cdk = require("@aws-cdk/core");
const ec2 = require("@aws-cdk/aws-ec2");
const iam = require("@aws-cdk/aws-iam");
const ecs = require("@aws-cdk/aws-ecs");
const path = require("path");
const ecs_patterns = require("@aws-cdk/aws-ecs-patterns");

// Stack properties - what region to deploy to
const props = {
  env: {
    region: "us-east-2",
    account: "745867115652"
  }
};

class CdkStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);
    // The code that defines your stack goes here

    // IAM inline role - the service principal is required
    const taskRole = new iam.Role(this, "fargate-test-task-role", {
      assumedBy: new iam.ServicePrincipal("ecs-tasks.amazonaws.com")
    });

    // Define a fargate task with the newly created execution and task roles
    const taskDefinition = new ecs.FargateTaskDefinition(
      this,
      "fargate-task-definition",
      {
        taskRole: taskRole,
        executionRole: taskRole
      }
    );

    // Import a local docker image and set up logger
    const container = taskDefinition.addContainer(
      "fargate-test-task-container",
      {
        image: ecs.ContainerImage.fromRegistry(
          "public.ecr.aws/k7n1g7c2/math-random:latest"
        ),
        logging: new ecs.AwsLogDriver({
          streamPrefix: "fargate-test-task-log-prefix"
        })
      }
    );

    container.addPortMappings({
      containerPort: 3000,
      hostPort: 3000,
      protocol: ecs.Protocol.TCP
    });

    // NOTE: I've been creating a new VPC in us-east-2 (Ohio) to keep it clean, so se that at the top in stackProps
    // Create a vpc to hold everything - this creates a brand new vpc
    // Remove this if you are using us-east-1 and the existing non-prod vpc as commented out below
    const vpc = new ec2.Vpc(this, "fargate-test-task-vpc", {
      maxAzs: 2,
      natGateways: 1
    });

    // Create the cluster
    const cluster = new ecs.Cluster(this, "fargate-test-task-cluster", { vpc });

    // Create a load-balanced Fargate service and make it public
    new ecs_patterns.ApplicationLoadBalancedFargateService(
      this,
      "MyFargateService",
      {
        cluster: cluster, // Required
        cpu: 512, // Default is 256
        desiredCount: 2, // Default is 1
        taskDefinition: taskDefinition,
        memoryLimitMiB: 2048, // Default is 512
        publicLoadBalancer: true // Default is false
      }
    );
  }
}

module.exports = { CdkStack };