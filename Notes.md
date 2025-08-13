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
    "id": 100,
    "name": "Alice Morgan",
    "title": "CEO & Co-Founder",
    "department": "Leadership",
    "photo": "https://randomuser.me/api/portraits/women/90.jpg",
    "managerId": null
  },
  {
    "id": 101,
    "name": "Brian Carter",
    "title": "CTO & Co-Founder",
    "department": "Engineering",
    "photo": "https://randomuser.me/api/portraits/men/91.jpg",
    "managerId": 100
  },
  {
    "id": 102,
    "name": "Sophia Turner",
    "title": "CFO & Co-Founder",
    "department": "Finance",
    "photo": "https://randomuser.me/api/portraits/women/92.jpg",
    "managerId": 100
  }
]
