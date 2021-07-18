import {useState} from "react";
import {useHistory} from "react-router-dom";
import { useFormLogic } from "../logic/useFormLogic.js";
import {LoginClientErr,Form,Input,Label,Span,Button,Show,ErrorMsg} from "./style.js";
import {usePost} from "../../../hooks/usePost";
import Style from "./style.module.css";
import * as Yup from "yup"; 
import {useFormik} from "formik";
const LoginForm  = ()=>{
   const validationSchema = Yup.object({
      email : Yup.string().email("Invalid adress email").required("The email field is required"),
      password : Yup.string().max(30,"Password must be 30 letters or less").min(3,"password must be 3 letters or more").matches(/^[a-zA-Z0-9]{3,30}$/,"Password must have letters and digits"),
  })
   const history = useHistory(); 
   const setPost = usePost();
   const { errorMsg,
      setErrorMsg,
      isLoading,
      setIsLoading,
      isShow,
      setIsShow,
      handleShow}  = useFormLogic()
   const {errors,touched,values,handleChange,handleBlur,handleSubmit} = useFormik({
      initialValues :{         
         email:"",
         password :""
      },
      validationSchema
      ,
      onSubmit:async()=>{
         setIsLoading(true)      
         const data = await setPost("https://instegram-clone.herokuapp.com/api/auth/login",values);
         if(data){
            setIsLoading(false)
         }
         if(!data.login){
           setErrorMsg(data.error)
        }else{
           localStorage.setItem("token",data.token)
           history.push("/")
        }
      }
   })

 const isValid = values.email && values.password;
  return(
     <Form action="" className="flex" onSubmit={handleSubmit}>
         {errorMsg?<ErrorMsg>{errorMsg}</ErrorMsg>:null}
         <Label id={Style.emailLabel} margin="0 0 1rem 0 ">           
        <Input 
        id={Style.emailInput}
        isError = {errors.email && touched.email}
        name = "email"
        onBlur = {handleBlur}
        onChange={handleChange}
        required
        type="text"
        value={values.email}
        />          
           <Span id={Style.emailSpan} isError={errors.email && touched.email}>
                Enter your Email  
             </Span>           
           </Label>
           {errors.email&&touched.email?<LoginClientErr field="email">{errors.email}</LoginClientErr>:""}
        <Label id={Style.passwordLabel}>
        <Input 
        id={Style.passwordInput}
        isError = {errors.password&&touched.password}
        name="password"
        onBlur = {handleBlur} 
        onChange={handleChange}
        required
        type={isShow?"text":"password"} 
        value={values.password}
        />
          <Span id={Style.passwordSpan} isError={errors.password&&touched.password}>
                Password
          </Span>
          </Label>
          {values.password?<Show onClick={handleShow} tabIndex="1">{!isShow?"Show":"Hide"}</Show>:""}
          {errors.password&&touched.password?<LoginClientErr field="password">{errors.password}</LoginClientErr>:""}
        <Button type="submit" margin="1rem 0 1.3rem 0" isValid={isValid} >
           {
              isLoading ?
              <i className="fa fa-spinner fa-spin"></i>
              :
              "Log In"               
           }
           </Button>
     
     </Form>
  )
   
}

export default LoginForm;