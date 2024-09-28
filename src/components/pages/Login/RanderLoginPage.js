
import { FormButton, FormInput } from '../../common';


function RenderLoginPage({ username, password, isSubmitting, error, setUsername, setPassword, login }) {

    const handleChange = (event) => {
      console.log('This is  handleChange')
    };

    const handleSubmit = (event) => {
        console.log('This is handleSubmit')
    };
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <FormInput
                        labelId="username"
                        name="username"
                        placeholder="Username"
                        value={username}
                        handleInput={handleChange}
                        disabled={isSubmitting}
                    />
                    <FormInput
                        labelId="password"
                        name="password"
                        placeholder="Password"
                        type="password"
                        value={password}
                        handleInput={handleChange}
                        disabled={isSubmitting}
                    />
                    <FormButton

                        buttonText={isSubmitting ? 'Logging in...' : 'Log in'}
                        isDisabled={isSubmitting}
                        classType="primary"
                    />
                    {error && <p style={{color: 'red'}}>Error: {error}</p>}
                </form>
            </div>
        </div>
    );
}


export default RenderLoginPage;