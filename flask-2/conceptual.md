### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?
a set of standards to create efficent, reusable routes

- What is a resource?
how we identify the object we are mapping to

- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?
json is intended to return JSON data to the client based on the request sent to the server

- What does idempotent mean? Which HTTP verbs are idempotent?
idempotent- denoting an element of a set which is unchanged in value when multiplies or otherwise operated on by itself
GET, HEAD, OPTIONS, TRACE, PUT and DELETE

- What is the difference between PUT and PATCH?
PUT - altering resources when the client transmits data that revamps the whole resource
PATCH - transforming the resources when the client transmits partial data that will be updated with changing the whole data

- What is one way encryption?
one way encryption is an encryption of a password that cannot be decrypted in an easy way, you input a password the encryption takes hold and changes everything about the password that no human can translate

- What is the purpose of a `salt` when hashing a password?
adds more encrytpion to a password to make it more secure

- What is the purpose of the Bcrypt module?
it helps hash and encrypt password to keep them safe from terrible people

- What is the difference between authorization and authentication?
Authentication - process of determining whether or not a user is actually a valid user
Authorization - level of access the authenticated user has within the application
