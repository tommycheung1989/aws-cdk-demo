import * as cdk from 'aws-cdk-lib'
import * as ecr from 'aws-cdk-lib/aws-ecr'

export class EcrStack extends cdk.Stack{
    public readonly ecrStack: ecr.Repository;

    constructor(scope: cdk.App, name: string, props?: cdk.StackProps) {
        super(scope, name, props)
        
        this.ecrStack = new ecr.Repository(this, "aws-ecr", {
            repositoryName: "aws-ecr-demo",
            
        })
    }
}