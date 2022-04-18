import React from 'react';

const Blog = () => {
          return (
                    <div>
                             <h1>Welcome to my blog</h1> 
                             <h2>1. Difference between authorization and authentication</h2>
                             <h3> Authentication:</h3>
                             <p>answer: 1. process of confirming the truth of an attribute of a single pieece of data vlaimed true by entity. </p>
                             <p>2.checks a person's details to identify him</p>
                             <p>3.verifies user's credentials</p>
                             <p>4.Occurs before authorization</p>
                             <p>example: A student can authenticate himself before accessing the learning management system of a university</p>
                             <h3>Authorization</h3>
                             <p>1.process of specifying access right's/ privileges to resources related to information security.</p>
                             <p>2. Checks a user's privileges to access resources. </p>
                             <p>3. Validates user's permissions </p>
                             <p>4. Occurs after authentication</p>
                             <p>example: He can access lecture slides and other learning material of the courses based on the permissions given to him. </p>
                             <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
                             <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                             <p>there are other option  for authentication is react firebase hooks.</p>
                             <h1>What other services does firebase provide other than authentication</h1>
                             <p>There are many services which Firebase provides, Most useful of them are:
                                       <p>1.Cloud Firestore</p>
                                       <p>2.Cloud Functions</p>
                                       <p>3.Authentication</p>
                                       <p>4.Hosting</p>
                                        <p>5.Cloud Storage</p>
                                       <p>6.Google Analytics</p>
                                       <p>7.Predictions</p>
                                       <p>8.Cloud Messaging</p>
                                       <p>9.Dynamic Links</p>
                                       <p>10.Remote Config</p>

</p>
                    </div>
          );
};

export default Blog;