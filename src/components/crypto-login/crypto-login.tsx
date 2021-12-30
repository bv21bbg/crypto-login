import { MetaMaskLogin } from "./meta-mask-login";

export const CryptoLogin = () => {
  return (
    <div>
      <div className="title">
        <b>Crypto login</b>
      </div>

      <MetaMaskLogin />

      <button>Login with Ecto</button>
      <button>Login with Poltergeist</button>
    </div>
  );
};
