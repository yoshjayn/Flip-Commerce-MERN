// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise(async (resolve) =>{
    // setTimeout(() => resolve({ data: amount }), 500)
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  resolve({data})
}
  );
}
