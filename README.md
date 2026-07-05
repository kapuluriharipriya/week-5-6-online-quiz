
# 🎯 Online Quiz Application

A fully functional, interactive online quiz application built with HTML, CSS, and JavaScript. Features multiple quiz categories, real-time scoring, and detailed result analysis.

## Features

✨ **Key Features:**
- 🎨 Modern, responsive UI with gradient backgrounds
- 📱 Fully mobile-responsive design
- 🎯 Multiple quiz categories (General Knowledge, Science, History, Technology)
- 💾 Quiz progress tracking
- 🔄 Navigation between questions
- 📊 Real-time score calculation
- 🏆 Detailed results with performance feedback
- ⚡ Smooth animations and transitions

## Quiz Categories

1. **General Knowledge** - Test your knowledge about geography, history, and culture
2. **Science** - Challenge yourself with scientific facts and concepts
3. **History** - Explore historical events and figures
4. **Technology** - Quiz about computers, programming, and tech innovations

## How to Use

1. Open `index.html` in your web browser
2. Select a quiz category from the home screen
3. Answer each question by selecting an option
4. Use "Previous" and "Next" buttons to navigate
5. Click "Submit Quiz" to see your results
6. View detailed feedback on each answer
7. Take another quiz or return to home

## File Structure

```
├── index.html      # Main HTML file with structure and content
├── styles.css      # Styling and responsive design
├── script.js       # Quiz logic and interactivity
└── README.md       # Documentation
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and grid
- **JavaScript (ES6)** - Dynamic functionality and quiz logic

## Features Explained

### Quiz Data Structure
Each quiz category contains 10 questions with:
- Question text
- 4 multiple choice options
- Correct answer index

### Quiz Flow
1. Home Screen → Category Selection
2. Quiz Screen → Question Display & Navigation
3. Results Screen → Score & Performance Analysis

### Scoring System
- Points awarded for correct answers
- Performance message based on percentage:
  - 100%: Perfect Score
  - 80-99%: Excellent Performance
  - 60-79%: Good Job
  - 40-59%: Keep Practicing
  - Below 40%: Study More

### Responsive Design
- Optimized for desktop, tablet, and mobile
- Flexible grid layouts
- Touch-friendly button sizes
- Readable text sizes across all devices

## Customization

### Adding More Questions
Edit the `quizData` object in `script.js`:
```javascript
"categoryName": [
    {
        question: "Your question here?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0  // Index of correct answer (0-3)
    }
]
```

### Adding New Categories
1. Add category data to `quizData` in `script.js`
2. Add a button in `index.html`:
```html
<button class="category-btn" data-category="newCategory">
    <span class="icon">🎓</span>
    <span>Category Name</span>
</button>
```

### Changing Colors
Modify the gradient colors in `styles.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lightweight and fast loading
- No external dependencies
- Pure vanilla JavaScript
- Optimized CSS animations

## Future Enhancements

- 🔐 User authentication
- 💾 Save progress to local storage
- 📈 Track statistics across sessions
- 🎮 Multiplayer mode
- 🔊 Audio feedback
- 🌙 Dark mode theme
- 📤 Export results
- 🏅 Leaderboard system

## License

This project is open source and available under the MIT License.

## Author

Created as an educational web development project.

---

**Enjoy testing your knowledge! Good Luck! 🍀**
