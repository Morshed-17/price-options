import { LineChart as Lchart, Line , XAxis, YAxis} from 'recharts';
const LineChart = () => {
   const mathMarks = [
    {"id": 1, "name": "John Smith", "math": 90, "physics": 85, "chemistry": 78},
    {"id": 2, "name": "Alice Johnson", "math": 85, "physics": 88, "chemistry": 92},
    {"id": 3, "name": "Michael Brown", "math": 78, "physics": 75, "chemistry": 80},
    {"id": 4, "name": "Emily Davis", "math": 44, "physics": 90, "chemistry": 82},
    {"id": 5, "name": "David Wilson", "math": 88, "physics": 85, "chemistry": 95},
    {"id": 6, "name": "Sarah Lee", "math": 75, "physics":50, "chemistry": 70},
    {"id": 7, "name": "Robert Clark", "math": 96, "physics": 88, "chemistry": 91},
    {"id": 8, "name": "Jessica Hall", "math": 84, "physics": 89, "chemistry": 76},
    {"id": 9, "name": "Matthew Turner", "math": 77, "physics": 81, "chemistry": 85},
    {"id": 10, "name": "Olivia Adams", "math": 45, "physics": 55, "chemistry": 49}
      ]
    return (
        <div>
            <Lchart
                width={500} height={400} data={mathMarks}>
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'/>
                <Line dataKey="physics" stroke='orange'/>
                <Line dataKey="chemistry" stroke='blue'/>
            </Lchart>
        </div>
    );
};

export default LineChart;