# NOTES.md

## AI Tools Used and How They Helped
For parts of the project, **GitHub Copilot** was used to accelerate development and suggest optimized component structures.  
It provided quick boilerplate code for components like the `Sidebar` and `Header`, which were later customized for our requirements.  
Copilot also assisted in refining TailwindCSS utility class usage for responsive layouts.  

---

## Sample Employee Data (`employees.json`)
Below is a small example of the dataset. The full file is located in `src/data/employees.json`.

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "department": "Engineering",
    "designation": "CTO",
    "managerId": null
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "department": "Engineering",
    "designation": "Lead Developer",
    "managerId": 1
  },
  {
    "id": 3,
    "name": "Emily Johnson",
    "department": "Design",
    "designation": "UI/UX Designer",
    "managerId": 1
  }
]
