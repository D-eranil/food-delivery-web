import classes from './AvailableMeals.css';
import Card from '../UI/Card';
import MealItem from './MealItems/MealItems';

const DUMMY_MEALS =[
    {
        id : 'm1',
        name : 'Pizza',
        description : "Loreum Ipsum dummy Text",
        price : '20.00',
    },
    {
        id:'m2',
        name:'Pizza2',
        description:"Loreum Ipsum dummy Text",
        price:'30.00',
    },
    {
        id:'m3',
        name:'Pizza',
        description:"Loreum Ipsum dummy Text",
        price:'50.00',
    },
    {
        id:'m4',
        name:'Pizza',
        description:"Loreum Ipsum dummy Text",
        price:'10.00',
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));
  
    return (
      <section className={classes.meals}>
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </section>
    );
  };

export default AvailableMeals;