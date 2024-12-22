import "./Loading.css";

const Loading = () => {
  return (
    <div className="Loading">
      <div className="Loading_content-load">
        <div className="Loading_content">
          <div className="circle xxlarge shade1"></div>
          <div className="circle xlarge shade2"></div>
          <div className="circle large shade3"></div>
          <div className="circle mediun shade4"></div>
          <div className="circle small shade5"></div>
          <div className="Loading_load">
            <img src="./load/loading-bar-blue.gif" alt="load" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
