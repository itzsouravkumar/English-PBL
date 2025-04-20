export interface Team {
  id: number
  name: string
  description: string
  leader: string
  members: string[]
  files: {
    ppt: string
    pdf: string
    video: string
  }
}


export const teams: Team[] = [
  {
    id: 0,
    name: "Team 0: The Hungry Tide",
    description:
      "Analyzing The Hungry Tide to explore the complex relationship between humans and nature, with a focus on SDG 13, 14, and 15 — highlighting themes of climate action, marine conservation, and the protection of terrestrial ecosystems.",
    leader: "Srishti Singh",
    members: ["Yoki Chinnasamy", "Srishti Singh", "Arjun Anil", "D Neha","Hemanth Reddy K", "Abhay Agarwal", "Athina Sri Rama Krishna"],
    files: {
      ppt: "https://docs.google.com/presentation/d/e/2PACX-1vTcposeTWaqf8ZDvjxsRFqO6VLx4H2tQEs3btjEk9EoTUWWHkCnd8XAjbwFTRfkInwqyov5IC8Apnu4/embed?start=false&loop=false&delayms=3000",
      pdf: "/assets/team0/report.pdf",
      video: "https://www.youtube.com/watch?v=YpuM0-p8OUs"
    },
  },
  {
    id: 1,
    name: "Team 1:  The Palace of Illusions",
    description:
      "A project based on Chitra Banerjee Divakaruni's The Palace of Illusions, exploring themes of gender roles, autonomy, and patriarchal structures through the story of Draupadi, while addressing SDG 5: Gender Equality, SDG 10: Reduced Inequalities, SDG 16: Peace, Justice, and Strong Institutions, and SDG 12: Responsible Consumption and Production.",
    leader: "Pooja Kumari",
    members: ["Elijah Ajith Akuei","Pooja Kumari", "Sitanshuk Ambastha", "Padmanathan C", "Haritha S", "Yokeshwaran ", "Sarthak Srivastava", "P Rishith"],
    files: {
      ppt: "https://docs.google.com/presentation/d/e/2PACX-1vQt67yPnrNgjrtTiv6D-pC6iiD8ylBpHhTd88HqIwMcObk95ebGXnv76u9-Z83IBw/embed?start=false&loop=false&delayms=3000",
      pdf: "/assets/team1/report.pdf",
      video: "https://www.youtube.com/watch?v=A8o0XpQB8Jc"
    },
  },
  {
    id: 2,
    name: "Team 2: 1984 by George Orwell",
    description:
      "A project based on George Orwell's '1984', exploring the implications of mass surveillance, censorship, and personal liberty, connected with SDG 16: Peace, Justice and Strong Institutions.",
    leader: "Kaustubh Chauhan",
      members: ["Akash Datta", "Ariv Agarwal", "Kaustubh Chauhan", "Appili Teja Rayal", "Vineet Seth", "Varun Misra", "Himanshu Choudhary", "Saikat Saha"],
    files: {
      ppt: "https://docs.google.com/presentation/d/e/2PACX-1vSZszb6qf64shBb59xzaD6G09-qvhQQ8hPnZKZDHbEDT4s1QunFHGw4Xj_nq5qKvQVoTurQcMdNozIf/embed?start=false&loop=false&delayms=3000",
      pdf: "/assets/team2/report.pdf",
      video: "https://www.youtube.com/watch?v=_Yym-jKe2sw"
    },
  },
  {
    id: 3,
    name: "Team 3: The Palace of Illusions",
    description:"A project based on Chitra Banerjee Divakaruni's The Palace of Illusions, examining themes of gender roles, autonomy, and patriarchal structures through the story of Draupadi, in connection with SDG 5: Gender Equality.",
    leader: "Shreya Sunil",
    members: ["Renisha Rana", "Shreya Sunil", "Koneru Mohan Vamsi", "Sushant Kumar Panda", "Pranav Y", "D Sai Sri Harshit", "Milan Santhosh", "Naman Tyagi"],
    files: {
      ppt: "https://docs.google.com/presentation/d/e/2PACX-1vRBXTM9Kk7jE3tXlIMLlDGT86n1IvqqJR49VFHUAKtZwxnNReODe96SbOjSbs9I5Q/embed?start=false&loop=false&delayms=3000",
      pdf: "/assets/team3/report.pdf",
      video: "https://www.youtube.com/watch?v=R7mGgcj7N6I"
    },
  },
  {
    id: 4,
    name: "Team 4: 1984 by George Orwell ",
    description:
      "Analyzing the 'Right to Freedom' in George Orwell’s 1984 through the lens of SDG 4 and SDG 16, focusing on how themes of justice, oppression, and institutional control reflect the importance of education and strong governance in protecting individual rights.",
    leader: "Garv Raj",
    members: ["Garv Raj", "Anshul Kumar Mahanti", "Pasumarthy Shanmukha Sri Lasya Priya", "Subashree A", "Mohit Singh Chahar", "Oviya B", "Jayasuriya Sankar"],
    files: {
      ppt: "https://docs.google.com/presentation/d/e/2PACX-1vTyyC-Y03Q2mxurEvJG9Q5dAZuOGqjCAWgjhBtxxxaUTx5KuPeN6WL52uqhNIc7eQ/embed?start=false&loop=false&delayms=3000",
      pdf: "/assets/team4/report.pdf",
      video: "https://www.youtube.com/watch?v=wUTDp0Ifwm0"
    },
  },
  {
    id: 5,
    name: "Team 5: The Hungry Tide",
    description:"A project based on Amitav Ghosh's 'The Hungry Tide', exploring the intersection of human life and ecological sustainability, in connection with SDG 13: Climate Action and SDG 15: Life on Land.",
    leader: "Vani Agarwal",
    members: ["Vani Agarwal", "Parkavi G", "Tushar Bisht", "Ameya Gupta", "Ajitesh B", "Peter Jijo Manavalan", "Adhavan"],
    files: {
      ppt: "https://docs.google.com/presentation/d/e/2PACX-1vSisV72CG1hmNcdPR1WJvXnoFRpgNECnpZdc36T0bi1TU5Q-GHtyKKasvPhYmcGKA/embed?start=false&loop=false&delayms=3000",
      pdf: "/assets/team5/report.pdf",
      video: "https://www.youtube.com/watch?v=PHhXDBnmOuE"
    },
  },
  {
    id: 6,
    name: "Team 6: 1984 by George Orwell",
    description:"Analyzing 1984 by George Orwell to explore themes of authoritarianism, surveillance, and social inequality. This analysis highlights the importance of promoting well-being (SDG 3), quality education (SDG 4), resilient infrastructure and innovation (SDG 9), reduced inequalities (SDG 10), and peace, justice, and strong institutions (SDG 16).",
    leader: "Aaradhya Patne",
      members: ["Madhumitha G", "Aaradhya Patne", "Abhinesh Kumar Singh", "Chiranjivi Kumar Ranjan", "Rajdeep Sarkar", "K A Abhinav", "R Harsha Vardhan"],
    files: {
      ppt: "https://docs.google.com/presentation/d/e/2PACX-1vRwESoFRf7RYkHHQc4_prjZWlMN1K4oJtORVNlc02wowpxWxc8suEUVWCsa2jZqbjur4XbDMTuipBFk/embed?start=false&loop=false&delayms=3000",
      pdf: "/assets/team6/report.pdf",
      video: "https://www.youtube.com/watch?v=yIm4Wct7BPs"
    },
  },
  {
    id: 7,
    name: "Team 7: Brave New World",
    description:
      "Examining Brave New World to explore how technological advancements and industrialization shape human values, societal norms, and governance structures, in alignment with SDG 9: Industry, Innovation, and Infrastructure.",
    leader: "Shrishti Singh",
    members: ["Arundhati Singh", "Shrishti Singh", "Ramya A", "Pranet Odil", "Gurram Rama Naga Sai Manikanta ", "Keshav Maheswari", "Mayank Anand"],
    files: {
      ppt: "https://docs.google.com/presentation/d/e/2PACX-1vTg4L41oITDPLoTe0aS5gjPkkWiVAdJnJ0S_C-bYWJvT2D8T4NbcBCqmE3DVA_7cVo2cmUkBaAnYhOD/embed?start=false&loop=false&delayms=3000",
      pdf: "/assets/team7/report.pdf",
      video: "https://www.youtube.com/watch?v=2bLEjJt8keI"
    },
  },
  {
    id: 8,
    name: "Team 8: The Palace of Illusions",
    description:
      "A project based on The Palace of Illusions, examining how gender norms, access to education, and systemic inequalities shape individual experiences, in alignment with SDG 4: Quality Education, SDG 5: Gender Equality, and SDG 10: Reduced Inequalities.",
    leader: "Allan Roy",
    members: ["Pranav Verma","Allan Roy", "Ankit", "Vihan Tiwari", "Pinneli Veeranjaneya Reddy", "Sanskar Gupta"],
    files: {
      ppt: "https://docs.google.com/presentation/d/e/2PACX-1vS0k1GpqX-VL3tosQP45GiZiLZaAQmI80VXzPHSrDA1OeWBK_8q3E-fCbpY6-DFZw/embed?start=false&loop=false&delayms=3000",
      pdf: "/assets/team8/report.pdf",
      video: "https://www.youtube.com/watch?v=gFwk-fD9sPk"
    },
  },
  {
    id: 9,
    name: "Team 9: To Kill A Mocking Bird",
    description:
      "Drawing from To Kill a Mockingbird, this project explores the role of education in shaping moral justice and the fight against systemic inequality, in alignment with SDG 4: Quality Education and SDG 16: Peace, Justice, and Strong Institutions.",
    leader: "Aaditya Nair S",
    members: ["Aaditya Nair S","Keerthana Sriram", "Shinjini Jha",  "Arhan Ashraf", "Sourav Kumar", "Rishika Raj ", "Duggempudi Venkata Naga Akhileswar Reddy"],
    files: {
      ppt: "https://docs.google.com/presentation/d/e/2PACX-1vTk4pBhL0wnwr-LpGT1VfUl_ENI-tCF9Hytmck0mKpDXlq09m8qJpOD2GPo_HTY04VOezIuWeCCXsZx/embed?start=false&loop=false&delayms=3000",
      pdf: "/assets/team9/report.pdf",
      video: "https://www.youtube.com/watch?v=RVH6UA2HBBc"
    },
  },
]
