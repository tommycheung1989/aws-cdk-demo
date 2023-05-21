import {aws_s3 as s3} from 'aws-cdk-lib'
import * as cdk from 'aws-cdk-lib'

export class S3Stack extends cdk.Stack{
    public readonly s3Bucket: s3.Bucket;

    constructor(scope: cdk.App, name: string, props?: cdk.StackProps) {
        super(scope, name, props)
        this.s3Bucket = new s3.Bucket(this, "cdk-s3-bucket", {
            versioned: true,
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            autoDeleteObjects: true
        })
    }

}
