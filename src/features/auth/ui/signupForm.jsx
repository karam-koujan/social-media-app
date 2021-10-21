import {useState} from "react";
import {useHistory} from "react-router-dom";
import { Error,Form, Input ,Label,Span,Button,ErrorMsg,Show} from "./style";
import {usePost} from "../../../hooks/usePost"
import Styles from "./style.module.css";
import {  useFormik} from "formik";
import * as Yup from "yup";
import { useFormLogic } from "../logic/useFormLogic";
 

const SignUp = ()=>{
    const validationSchema = Yup.object({
        email : Yup.string().email("Invalid adress email").required("The email field is required"),
        fullName : Yup.string().max(30,"fullName must be 30 letters or less").min(3,"fullName must be 3 letters or more"),
        password : Yup.string().max(30,"Password must be 30 letters or less").min(3,"password must be 3 letters or more").matches(/^[a-zA-Z0-9]{3,30}$/,"Password must have letters and digits"),
        userName :   Yup.string().max(20,"userName must be 30 letters or less").min(3,"userName must be 3 letters or more")
    })
 
 const { errorMsg,
    setErrorMsg,
    isLoading,
    setIsLoading,
    isShow,
    setIsShow,
    handleShow}  = useFormLogic()
 const history = useHistory(); 
 const setPost = usePost();
  const {values,errors,handleChange,handleSubmit,handleBlur,touched} = useFormik({
      initialValues: {
          email:"",
          fullName:"",
          userName:"",
          password:""
      },
      validationSchema
      ,
      onSubmit : async()=>{
          setIsLoading(true)
          const data = await setPost("https://instegram-clone.herokuapp.com/api/auth/signup",values);
          if(data){
              setIsLoading(false)
          }
          if(!data.signup){             
              setErrorMsg(data.error)
          }else{
            history.push("/login")
            
          }
      }
  })
 

  const isValid = values.email&&values.fullName&&values.userName&&values.password
    return(
      <Form className="flex" onSubmit={handleSubmit}>
         {errorMsg?<ErrorMsg>{errorMsg}</ErrorMsg>:null}
          <Label  margin="1rem 0 .5rem 0">
              <Input
              isError = {errors.email&&touched.email}
               name="email"
               onBlur={handleBlur}  
               onChange={handleChange}
               required
               type="text" id={Styles.emailInput}
               value={values.email}
     
               /> 
              <Span id={Styles.emailSpan} isError={errors.email&&touched.email}>
                  Enter your Email
              </Span>
            
          </Label>
          {errors.email&&touched.email?<Error field="email">{errors.email}</Error>:""}
          <Label margin="0 0 .5rem 0">
              <Input 
              id={Styles.fullNameInput}
              name="fullName"
              isError = {errors.fullName&&touched.fullName}
              onBlur={handleBlur}   
              onChange={handleChange}
              required
              type="text" 
              value={values.fullName} 
              />
              <Span id={Styles.fullNameSpan}    isError = {errors.fullName&&touched.fullName}>
                  Full Name
              </Span>
          </Label>
          {errors.fullName&&touched.fullName?<Error field="fullName">{errors.fullName}</Error>:""}


          <Label margin="0 0 .5rem 0">
              <Input 
              id={Styles.userNameInput}
              isError = {errors.userName&&touched.userName} 
              name="userName"
              onBlur={handleBlur}  
              onChange={handleChange}
              required
              type="text" 
              value={values.userName} 
              />
              <Span id={Styles.userNameSpan} isError={errors.userName&&touched.userName}>
                  Username
              </Span>
          </Label>
          {errors.userName&&touched.userName?<Error field="userName">{errors.userName}</Error>:""}

          <Label>
              <Input 
                     id={Styles.passwordInput}
                     isError = {errors.password&&touched.password}
                     name = "password"
                     onBlur={handleBlur}    
                     onChange={handleChange}
                     required
                     type={isShow?"text":"password"} 
                     value={values.password} 
                    />
              <Span id={Styles.passwordSpan} isError={errors.password&&touched.password} >
                  Password
              </Span>
          </Label>
          {values.password?<Show onClick={handleShow} >{!isShow?"Show":"Hide"}</Show>:""} 
          {errors.password&&touched.password?<Error field="password">{errors.password}</Error>:""}

          <Button margin="1rem 0 1.3rem 0" type="submit" isValid={isValid}>
          {
              isLoading ?
              <i className="fa fa-spinner fa-spin"></i>
              :
              "SignUp"               
           }
          </Button>
      </Form>
  )
}
export default SignUp;