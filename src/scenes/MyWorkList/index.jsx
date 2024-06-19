import TodoList from "../list/todolist";
const MyWorkPlan = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}> لیست کار های من</h1>

      <div className="cetralize mtfont">
        <TodoList />
      </div>
    </>
  );
};

export default MyWorkPlan;
