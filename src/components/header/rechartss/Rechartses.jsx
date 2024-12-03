import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const Rechartses = () => {
    const students = [
        { id: 1, name: "Alice", marks: 85, results: "Pass", avarageScore : 60},
        { id: 2, name: "Bob", marks: 42, results: "Fail", avarageScore : 30},
        { id: 3, name: "Charlie", marks: 76, results: "Pass", avarageScore : 60 },
        { id: 4, name: "David", marks: 33, results: "Fail", avarageScore : 30 },
        { id: 5, name: "Eve", marks: 90, results: "Pass", avarageScore : 60 },
        { id: 6, name: "Frank", marks: 68, results: "Pass", avarageScore : 60 },
        { id: 7, name: "Grace", marks: 47, results: "Fail", avarageScore : 30 },
        { id: 8, name: "Hannah", marks: 95, results: "Pass", avarageScore : 80 },
        { id: 9, name: "Ian", marks: 54, results: "Pass", avarageScore : 60 },
        { id: 10, name: "Jack", marks: 49, results: "Fail", avarageScore : 30 },
      ]
    return (
        <div>
            <LineChart width={800} height={400} data={students}>
        <Line type='monotone' dataKey= 'marks' stroke="#8884d8"></Line>
        <Line type='monotone' dataKey= 'id' stroke="#8884d8"></Line>
        <Line type='monotone' dataKey= 'avarageScore' stroke="#82ca9d" ></Line>
        <XAxis dataKey='name'></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        </LineChart>
        </div>
    );
};

export default Rechartses;