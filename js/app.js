let counter = 0;
let company = {
    name: `Tyler`,
    yearly_revenue: 1000000,
    ceo: `Important guy`,
    number_of_employees: 58,
    managers: [`ty`, `alex`, `random dude`]

};while(counter < managers.length) {
    console.log(managers[counter]);
    counter = counter +1;

}if (company[`yearly_revenue`] >= 1000000) {
    console.log(`congrats to: ${company[`name`]}, ceo: ${company[`ceo`]} employees: ${company[`number_of_employees`]}`);
} else {
    console.log(`you can do better`);
}