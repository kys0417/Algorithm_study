function solution(emergency) {
    let sortEmergency = [...emergency].sort((a,b) => b-a);
    // emergency.forEach((v,i) => {
    //     emergency[i] = sortEmergency.indexOf(v) + 1;
    // });
    // return emergency;
    return emergency.map((v) => sortEmergency.indexOf(v) + 1);
}