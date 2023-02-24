import Question from '../Question/Question'
import './Favorites.css'
import { Link } from 'react-router-dom'


interface FavoritesProps {
  questions: any[];
  deleteFav: (id: number) => void;
}

const Favorites: React.FunctionComponent<FavoritesProps> = (props) => {
  console.log(props)
  const cards = props.questions.map((item, index) => (
    <Question
      question={item.question}
      answer={item.correct_answer}
      id={item.id}
      key={index}
      deleteFav={props.deleteFav}
    />
  ));

  return (
    <>
      <nav>
        <Link to="/quiz"><h3 className='quiz-link'>Back To Quiz</h3></Link>
        <Link to='/'><h3 className='back-link'>Back To Home</h3></Link>
      </nav>
      {props.questions.length ?
      <div className='quiz-container'>
        {cards}
      </div> : <h3 className='no-favorites-msg'>No favorites yet, add some!</h3>}
    </>
  );
};

export default Favorites