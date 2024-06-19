import TodoList from "../list/todolist";
const MyStudyPlan = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}> لیست برنامه درسی من</h1>
      <div className="cetralize mtfont">
        <TodoList />
      </div>
    </>
  );
};

export default MyStudyPlan;
