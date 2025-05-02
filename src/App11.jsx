/*
{id:1, name:'小明', score:55},
{id:2, name:'小美', score:78},
{id:3, name:'小華', score:92},
{id:4, name:'阿強', score:40},

顯示 table 樣式
id | name | score | pass
 1   小明    55      X 
 2   小美    78      V 
 3   小華    92      V 
 4   阿強    40      X 
全班平均: XX

試著拆分父子組件
*/

// 子組件：表頭
function StudentTableHeader(){
    return(
        <thead>
            <tr>
                <th>ID</th><th>名稱</th><th>分數</th><th>及格與否</th>
            </tr>
        </thead>
    )
}

// 子組件：表身
function StudentTableBody({students}){
    return(
        <tbody>
            {
                students.map((student) => {
                    return (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td align="right">{student.score}</td>
                            <td>{student.score >= 60 ? 'V' : 'X'}</td>
                        </tr>
                    );
                })
            }
        </tbody>
    )
}

// 子組件：表尾
function StudentTableFooter({avgScore}){
    return(
        <tfoot>
            <tr>
                <td colSpan="2" align="right">全班平均</td>
                <td align="right">{avgScore.toFixed(1)}</td>
                <td></td>
            </tr>
        </tfoot>
    )
}

// 子組件：主表
function StudentTable({students, avgScore}){
    return (
        <table border="1">
            <StudentTableHeader/>
            <StudentTableBody students={students}/>
            <StudentTableFooter avgScore={avgScore}/>
        </table>
    )
    
}


// 父組件
function App() {
    const students = [
        {id:1, name:'小明', score:55},
        {id:2, name:'小美', score:78},
        {id:3, name:'小華', score:92},
        {id:4, name:'阿強', score:40},
        {id:5, name:'甜甜', score:81},
    ];

    // 計算分數平均
    const avgScore = students.reduce((sum, student) => sum + student.score, 0) / students.length;

    return(
        <>
            <h1>學生成績表</h1>
            <StudentTable students={students} avgScore={avgScore}/>
        </>
    )
}

export default App;