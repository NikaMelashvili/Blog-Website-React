import './login.css';

export default function Login() {
  return (
    <div className='login-container'>
      <h2>შესვლა</h2>
      <form method='POST'>
        <label>ელ-ფოსტა</label>
        <input placeholder='Example@redberry.ge'></input>
        <button type='submit'>შესვლა</button>
      </form>
    </div>
  );
}
