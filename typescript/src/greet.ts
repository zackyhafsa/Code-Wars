function greet(name: string, owner: string): string {
  return name === owner ? "Hello boss" : "Hello Guest";
}

console.log(greet("Daniel", "Daniel"));
