import { Stack } from 'aws-cdk-lib';
import iam from 'aws-cdk-lib/aws-iam';
import s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import s3 from 'aws-cdk-lib/aws-s3';

const BUCKET_NAME = 'www.humbertobpf.dev';

class InfrastructureStack extends Stack {
    constructor(scope, id, props) {
        super(scope, id, props);

        if (props && props.websiteDeployment) {
            const websiteBucket = s3.Bucket.fromBucketName(
                this,
                'PersonalWebsiteBucket',
                BUCKET_NAME
            );
            websiteBucket.grantPublicAccess();

            const bucketPolicy = new s3.BucketPolicy(this, 'BucketPolicy', {
                bucket: websiteBucket,
            });

            // Grant public access through the bucket policy
            bucketPolicy.document.addStatements(
                new iam.PolicyStatement({
                    actions: ['s3:GetObject'],
                    resources: [websiteBucket.arnForObjects('*')],
                    principals: [new iam.AnyPrincipal()],
                })
            );

            new s3deploy.BucketDeployment(this, 'DeployWebsite', {
                sources: [s3deploy.Source.asset('../build')],
                destinationBucket: websiteBucket,
            });
        } else {
            new s3.Bucket(this, 'PersonalWebsiteBucket', {
                bucketName: BUCKET_NAME,
                websiteIndexDocument: 'index.html',
                websiteErrorDocument: 'index.html',
            });
        }
    }
}

export { InfrastructureStack };
