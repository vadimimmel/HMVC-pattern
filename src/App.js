import { TaskModule, WeatherModule } from './components';

const App = () => {
    return (
        <div>
            <h1>Task Manager</h1>
            <TaskModule />
            <WeatherModule />
        </div>
    );
};

export default App;
