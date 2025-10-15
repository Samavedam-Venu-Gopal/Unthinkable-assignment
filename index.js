const express = require('express');
const app = express();
app.use(express.json());

app.post('/symptoms', (req, res) => {
    const symptomsText = req.body.symptoms || '';
    // Placeholder for future LLM integration
    res.json({
        probable_conditions: ['Condition A', 'Condition B'],
        next_steps: 'Consult a healthcare professional for diagnosis.',
        disclaimer: 'This is for educational purposes only.'
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
