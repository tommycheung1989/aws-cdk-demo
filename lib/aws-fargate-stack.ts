import * as cdk from "aws-cdk-lib";
import * as ecs from "aws-cdk-lib/aws-ecs";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as ecs_pattern from "aws-cdk-lib/aws-ecs-patterns";

export class FargateStack extends cdk.Stack {
  constructor(scope: cdk.App, name: string, props?: cdk.StackProps) {
    super(scope, name, props);

    //VPC
    const vpc = new ec2.Vpc(this, "demo-vpc", {
      maxAzs: 3,
    });

    //Fargate cluster
    const cluster = new ecs.Cluster(this, "demo-ecs-cluster", {
      vpc: vpc,
    });

    //Fargate service
    new ecs_pattern.ApplicationLoadBalancedFargateService(
      this,
      "demoBackendService",
      {
        cluster: cluster,
        memoryLimitMiB: 1024,
        cpu: 512,
        desiredCount: 2,
        taskImageOptions: {
          image: ecs.ContainerImage.fromAsset("./ecr-docker-demo/"),
          environment: {
            PORT: "8000",
          },
        },
      }
    );
  }
}
