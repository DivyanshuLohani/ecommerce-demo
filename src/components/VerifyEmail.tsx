export const EmailTemplate = (name: string, verifyCode: string) => {
  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <h4>
        Use this code to verify your account <strong>{verifyCode}</strong>
      </h4>
    </div>
  );
};
