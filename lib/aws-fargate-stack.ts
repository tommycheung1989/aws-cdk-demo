import * as cdk from 'aws-cdk-lib'
import * as ecs from 'aws-cdk-lib/aws-ecs'
import { Vpc } from 'aws-cdk-lib/aws-ec2'
import * as ecsp from 'aws-cdk-lib/aws-ecs-patterns';

export class FargateStack extends cdk.Stack{
    public readonly fargate: ecs.FargateService
    
    constructor(scope: cdk.App, name: string, props?: cdk.StackProps) {
        super(scope, name, props)

        //VPC
        const vpc = new Vpc(this, "demo-vpc", {
            maxAzs: 2,
            natGateways:1
        })

        //Fargate cluster
        const cluster = new ecs.Cluster(this, "demo-ecs-cluster", {
            vpc: vpc
        })

        //Fargate service
        const backendService = new ecsp.ApplicationLoadBalancedFargateService(this, "demoBackendService", {
            cluster: cluster,
            memoryLimitMiB: 1024,
            cpu: 512,
            desiredCount: 2,
            taskImageOptions: {
                image: ecs.ContainerImage.fromAsset('./ecr-docker-demo/'),
                environment: {
                    PORT:"8000"
                }
            }
        })
    }
}