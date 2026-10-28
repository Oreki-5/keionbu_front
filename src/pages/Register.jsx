export default function RegisterPage({ state }) {
  return (
    <>
      <h1>Register</h1>
      <div>
        <input type="text" name="username" id="username" placeholder="Username"/>
      </div>
      <div>
        <input type="password" name="password" id="password" placeholder="Password"/>
      </div>

      <div>
        <button type="submit">Register</button>
      </div>
    </>
  );
}
