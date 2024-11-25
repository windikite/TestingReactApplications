import PostForm from "./PostForm";
import ViewPosts from "./ViewPosts";


function Dashboard() {
    return ( 
        <div className='App bg bg-secondary' style={{height: "100%"}}>
          <PostForm />
          <ViewPosts />
        </div>
    );
}

export default Dashboard;