import React from 'react';
import {useHistory} from 'react-router-dom'
import {useForm}  from '../Hooks/useForm'
import {api} from '../Services/api'
import Logo from '../Assets/Img/logo-future-eats-invert@3x.png'
import {FormContainer, 
        LogoInvert, 
        MainContainer, 
        Button} 
        from './Styles/styles'
import InputComponent from '../Components/Inputs/InputComponent'




export default function LoginPage() {

  const history = useHistory()
  const initForm = {email: '', password: '' }
  const [form, onChange] = useForm(initForm)

  const handleChange = (event)=>{
    const {name, value} = event.target
    
    onChange(name, value)
  }

  const getAddress = (token)=>{
    
    api.defaults.headers.common['auth'] = token
    api.get('/profile/address').then(response=>{

      localStorage.setItem('address', JSON.stringify(response.data.address))

    }).catch(error=>{
      console.log(error.message)
    })
  }

  const loggingUser = (event)=>{

    api.post('/login', form).then(response=>{
      localStorage.setItem('user', JSON.stringify(response.data.user))
      localStorage.setItem('token', response.data.token)

      if(response.data.user.hasAddress){
        getAddress(response.data.token)
        history.push('/')
      }else{
        history.push('/address_form')
      }


    }).catch(error=>{
      console.log(error.message)
    })

    event.preventDefault()
  }

  return (
    <MainContainer>
        <LogoInvert src={Logo}/>

        <h3>Entrar</h3>
    <FormContainer onSubmit={loggingUser}>
          <InputComponent
              type="email"
              name='email'
              value={form.email}
              onChange={handleChange} 
              label="Email" 
                />
        
        <InputComponent
              type="password"
              name='password'
              value={form.password}
              onChange={handleChange} 
              label="Password" 
                />
            <Button>Login</Button>

            <div onClick={()=> history.push('/sign_up')}>
              <p>Nao Tem Cadastro? <b> Registre-se</b> </p>
            </div>
          
    </FormContainer>
    </MainContainer>
  );
}
