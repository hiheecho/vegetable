import CustomButton from "./CustomButton";

function User(props) {
  return (
    <div className="box-style">
      {props.user.age}살 - {props.user.name}
      <CustomButton
        color="red"
        onClick={() => {
          props.handleDelete(props.user.id);
        }}
      >
        삭제
      </CustomButton>
    </div>
  );
}

export default User;
