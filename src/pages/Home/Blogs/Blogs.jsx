

const Blogs = () => {
  return (
    <div className="space-y-4 my-8">
      <div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-xl font-medium">- What is an access token and refresh token? How do they work and where should
  we store them on the client side?</div>
  <div className="collapse-content">
    <p className="text-justify"><span className="text-lg font-semibold">Access token:</span> Access and ID tokens are JSON web tokens that are valid for a specific number of seconds. A user needs a new access token when they attempt to access a resource for the first time. The user also needs a new access token after the previously granted access token expires.</p>
    <p className="text-justify">Access tokens are used in token-based authentication to allow an application to access an API. The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a credential when it calls the target API.</p>
    
     <br />
    <p className="text-justify"><span className="text-lg font-semibold">Refresh token:</span> A refresh token is a special token that is used to obtain more access tokens. This allows you to have short-lived access tokens without having to collect credentials every time one expires. You request a refresh token alongside the access and/or ID tokens as part of a user's initial authentication and authorization flow. Apps must then securely store refresh tokens since they allow users to remain authenticated.</p>
    <p className="text-justify">The main purpose of using a refresh token is to considerably shorten the life of an access token. The refresh token can then later be used to authenticate the user as and when required by the application without running into problems such as cookies being blocked, etc.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-medium">- What is express js? What is Nest JS?</div>
  <div className="collapse-content">
    <p className="text-justify">Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.</p>
    <p className="text-justify">Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).</p>
  </div>
</div>
    </div>
  );
};

export default Blogs;