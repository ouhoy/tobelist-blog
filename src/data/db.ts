interface Post {
    id: number;
    title: string;
    short_description: string;
    body: string;
    img: string
}

const posts: Post[] = [
    {
        id: 1,
        title: "Boost Productivity: 10 Proven Strategies",
        short_description: "Discover 10 proven strategies to enhance productivity, from prioritizing tasks to managing time effectively. Achieve more in less time!",
        body: "In today's fast-paced world, productivity is essential for success. Whether you're a student, professional, or entrepreneur, mastering productivity can make a significant difference in your life. Here are 10 proven strategies to boost your productivity:\n\n1. Prioritize Tasks: Identify your most important tasks and tackle them first.\n2. Time Management: Use techniques like the Pomodoro Technique to manage your time efficiently.\n3. Set SMART Goals: Ensure your goals are Specific, Measurable, Achievable, Relevant, and Time-bound.\n4. Eliminate Distractions: Minimize interruptions and create a focused work environment.\n5. Delegate: Delegate tasks when possible to free up your time for high-value activities.\n6. Learn to Say No: Avoid overcommitting and only take on tasks that align with your goals.\n7. Use Technology Wisely: Leverage productivity apps and tools to streamline tasks.\n8. Take Breaks: Regular breaks can refresh your mind and increase overall productivity.\n9. Continuous Learning: Invest in learning and skill development to stay competitive.\n10. Healthy Lifestyle: Maintain a balanced diet, exercise, and get enough sleep for peak productivity.\n\nImplementing these strategies can help you work smarter, not harder, and ultimately achieve your productivity goals.",
        img: "http://localhost:5173/src/assets/images/carl-heyerdahl-KE0nC8-58MQ-unsplash.jpg",
    },
    {
        id: 2,
        title: "Effective Time Management Techniques",
        short_description: "Learn how to make the most of your time with practical time management strategies. Increase productivity and reduce stress in your daily life.",
        body: "Time management is a key skill for success in any field. This post explores effective techniques to help you make the most of your time. Topics include setting priorities, creating schedules, managing distractions, and staying organized. By implementing these strategies, you can achieve more in less time and reduce stress in your daily life.",
        img: "http://localhost:5173/src/assets/images/premium.avif"
    },
    {
        id: 3,
        title: "The Power of Goal Setting",
        short_description: "Unlock your potential by setting clear, achievable goals. Discover the benefits of goal setting and how it can drive productivity and success.",
        body: "Setting clear and achievable goals is a powerful way to boost productivity and drive success. This post delves into the importance of goal setting, including how to define SMART (Specific, Measurable, Achievable, Relevant, and Time-bound) goals, track progress, and stay motivated. Whether in your personal or professional life, effective goal setting can help you reach new heights.",
        img: "https://plus.unsplash.com/premium_photo-1687118731563-ce48ca657778?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80"
    },
    {
        id: 4,
        title: "Mastering the Art of Delegation",
        short_description: "Learn the art of delegation and free up your time for more important tasks. Discover why effective delegation is a key productivity skill.",
        body: "Delegation is a crucial skill for productivity. This post explores the art of delegation, including when and how to delegate effectively. Discover the benefits of delegation, such as freeing up your time for high-value tasks and empowering your team members. Mastering delegation can lead to increased productivity and better results.",
        img: "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    {
        id: 5,
        title: "Productivity Apps and Tools You Need",
        short_description: "Explore a curated list of productivity apps and tools to streamline your work. Supercharge your productivity with technology!",
        body: "Technology can be a game-changer for productivity. This post introduces a curated list of productivity apps and tools that can streamline your work, from task management and note-taking to time tracking and communication. Discover how to leverage technology to supercharge your productivity and get more done in less time.",
        img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    }
];

export default posts