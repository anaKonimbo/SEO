import { GeneralContext } from "../state/general.context";
import { useContext } from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";

const Page = () => {
  const { loadingState, popupState, errorState, submitSettings, settingsState } = useContext(GeneralContext);
  // .prettierignore
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="App">
      <h1>SEO Settings</h1>

      <h2>גוגל - דף הבית</h2>
      <p>הדגרות כללי</p>

      <Form>
        <Controller
          name="title"
          defaultValue=""
          control={control}
          // rules={{
          //   required: true,
          //   minLength: 2,
          // }}
          render={({ field: { onChange, value } }) => (
            <InputContainer>
              <Input onChange={onChange} value={value} placeholder="גוגל - title" />
            </InputContainer>
          )}
        />
        {errors.name && <StyledText>This is not valid.</StyledText>}

        <Controller
          name="description"
          defaultValue=""
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputContainer>
              <Input onChange={onChange} value={value} placeholder="גוגל - description" />
            </InputContainer>
          )}
        />
        {errors.name && <StyledText>This is not valid.</StyledText>}

        <Controller
          name="keywords"
          defaultValue=""
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputContainer>
              <Input onChange={onChange} value={value} placeholder="גוגל - keywords" />
            </InputContainer>
          )}
        />
        {errors.name && <StyledText>This is not valid.</StyledText>}

        {/* <Button title="Submit" onClick={handleSubmit(onSubmit)}> */}
        <Button title="Submit" onClick={handleSubmit((data) => submitSettings(data))}>
          submit
        </Button>
      </Form>

      <p>{settingsState.name}</p>
    </div>
  );
};

export default Page;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const Text = styled.p`
  /* line-height: 1.15; */
  font-size: 2rem;
  text-align: center;
  padding: 2.2rem 4.4rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 40rem;
`;

export const Input = styled.input`
  background: #fff;
  color: navy;
  /* padding: 15px; */
  padding: 15px 50px;
  width: 100%;
  margin: 10px;
  border-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;
  box-shadow: 10px 5px 5px grey;
`;

export const TextArea = styled.textarea`
  background: #fff;
  color: navy;
  padding: 15px 50px;
  width: 100%;
  height: 200px;
  margin: 10px;
  border-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;
  box-shadow: 10px 5px 5px grey;
`;

// export const InputIcon = styled(FontAwesomeIcon)`
//   position: relative;
//   z-index: 100;
//   top: 25px;
//   font-size: 20px;
//   left: 50px;
// `;

export const Button = styled.button`
  padding: 15px;
  border-radius: 10px;
  margin-top: 10px;

  margin: 20px;

  color: #fff;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 10px;
  box-shadow: 10px 5px 5px grey;
  width: 20rem;
`;

export const StyledText = styled.p`
  font-weight: bold;
  color: red;
  text-align: center;
  padding-bottom: 10px;
`;
