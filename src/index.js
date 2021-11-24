// Basic import
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

// React Component
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>Warning! Are you sure?</div>

        <CommentDetail
          author="Sam"
          time="Today at 3:45 PM"
          text="WTF!!!"
          image={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <div>Warning! Are you sure?</div>
        <CommentDetail
          author="Mike"
          time="Yesterday at 12:45 PM"
          text="This is a nice surprise!"
          image={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <div>Warning! Are you sure?</div>
        <CommentDetail
          author="Jane"
          time="Yesterday at 11:25 AM"
          text="Never heard about it"
          image={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

// Render on screen
ReactDOM.render(<App />, document.querySelector('#root'));
