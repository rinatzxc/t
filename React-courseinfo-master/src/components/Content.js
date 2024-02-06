import Part from "./Part";

const Content = ({parts}) => {
    return (
        <div>
            {parts.map(p => <Part key={p.id} topic={p.topic} exercises={p.exercises}/>)}
        </div>
    );
}

export default Content;