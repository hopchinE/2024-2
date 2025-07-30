const example = [[7, 6, 4, 2, 1],
                [1, 2, 7, 8, 9],
                [1, 3],
                [9, 7, 6, 2, 1],
                [1, 3, 2, 4, 5],
                [8, 6, 4, 4, 1],
                [1, 3, 6, 7, 9],
                [0]
                ];

function analyze(reports: number[][]){
    const checks: string[] = [];
    reports.forEach((x, index) =>{
        let message: string = `Report ${index} is safe`;
        if(x.length > 1){
            let i: number = 1;
            const ascending: boolean = x[0] < x[1];
            while(i < x.length){
                const last: number = x[i - 1];
                const current: number = x[i];
                if(ascending === (last < current)){
                    const diff = Math.abs(current - last);
                    if(diff > 3 || diff < 1){
                        message = `Report ${index} is unsafe because the gap between ${current} and ${last} is not between 1 and 3`;
                        break;
                    }
                }
                else{
                    message = `Report ${index} is unsafe because it alternated between ascending and descending`;
                    break;
                }
                i++;
            }
        }
        else{
            message = `Report ${index} is invalid due to lack of data`;
        }
        checks.push(message);
    });
    checks.forEach((x) => {
        console.log(x);
    })
}

analyze(example);