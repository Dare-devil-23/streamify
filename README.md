### Project Documentation: Dashboard Overview

#### Project Summary
This project is a **Single-Page Application (SPA)** built using **Next.js**, **TypeScript**, and **Tailwind CSS**. It provides an intuitive dashboard for visualizing key platform metrics, including user engagement, revenue breakdown, and top artists and songs. 

The main features of the dashboard are:
- **Key Metrics Cards**: Displaying data such as total users, active users, total streams, revenue, and top artist.
- **Data Visualization**: Interactive line, pie, and bar charts using **Recharts**.
- **Data Table**: A detailed table of recent streams, with filtering and sorting functionalities.
- **Smooth Animations**: Implemented with **Framer Motion** for a seamless user experience.
- **Unit Tests**: Sample unit tests created using **Jest** for one component.

---

### Features Breakdown

1. **Key Metrics**
   - **Total Users**: Displays the total number of users on the platform.
   - **Active Users**: Shows users who have streamed at least one song in the past 30 days.
   - **Total Streams**: Shows the total number of song streams on the platform.
   - **Revenue**: Displays the total revenue generated from subscriptions and ads.
   - **Top Artist**: The artist with the most streams in the past 30 days.

2. **Data Visualization**
   - **User Growth Chart**: A line chart showing user and active user growth over the past 12 months.
   - **Revenue Distribution**: A pie chart visualizing revenue from subscriptions and ads.
   - **Top 5 Streamed Songs**: A bar chart showing the top 5 most streamed songs in the last 30 days.

3. **Data Table**
   - **Sortable and Filterable Table**: Users can sort by stream count and filter by song name or artist.

4. **Additional Features**
   - **Age Grops**: Shows users age-group comparision.
   - **Top5 Songs Card Type**: Also included top 5 songs cards view.
   - **Chart Interactions**: Hover to view exact data points on charts.
   - **Animations**: **Framer Motion** adds smooth transitions between different dashboard sections.

---

### Technical Stack

- **Next.js**: Server-side rendering for improved performance and SEO.
- **TypeScript**: Type safety for better code maintainability and development experience.
- **Tailwind CSS**: Customizable utility-first CSS framework for responsive design.
- **Recharts**: Charting library used for creating the line, pie, and bar charts.
- **Framer Motion**: Smooth animations for enhanced user interactions.
- **Jest**: Unit testing for components.

---

### Performance Considerations

- **Lazy Loading and Code Splitting**: Implemented to ensure faster load times and improved app performance.
- **Memoization**: Applied in key places to avoid unnecessary re-renders, optimizing React's performance.
  
---

### Unit Testing

- **Jest**: A sample unit test was written for one of the key components, ensuring its correct behavior. Test coverage can be expanded as needed.

---

### How to Run the Application

1. **Clone the Repository**: 
   ```bash
   git clone git@github.com:Dare-devil-23/streamify.git
   ```
   
2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm run dev
   ```
   The application will be running on `http://localhost:3000`.

4. **Run Tests**:
   ```bash
   npm test
   ```

---

### Trade-offs and Design Choices

1. **TypeScript**: Chosen for its type safety and to minimize runtime errors, though it may add some initial complexity.
2. **Recharts**: A well-documented and highly customizable chart library, though other libraries (e.g., D3.js) could offer more flexibility for complex visualizations.
3. **Top5 Songs card view**: Uncomment <CardType> and comment <GraphType> components to check view in @\src\components\home\visualization\topFive\index.tsx.

---

### Future Improvements

- **Real Backend**: Replace mocked data with an actual API to make the dashboard functional with real-time data.
- **Expanded Unit Testing**: Increase coverage by testing more components and edge cases.
- **Error Handling**: Implement a more robust error-handling system for data fetching and user input.
  
---

### Conclusion

This project showcases a modern and responsive dashboard designed with a strong focus on user experience and performance. The combination of **Next.js**, **TypeScript**, and **Tailwind CSS** ensures a scalable and maintainable codebase, while **Recharts** and **Framer Motion** provide engaging visualizations and interactions.