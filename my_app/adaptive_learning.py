import torch
from transformers import GPT2Tokenizer, GPT2LMHeadModel, BertForSequenceClassification

class AdaptiveLearning:
    def __init__(self):
        self.tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
        self.model = GPT2LMHeadModel.from_pretrained("gpt2")
        self.bert_model = BertForSequenceClassification.from_pretrained("bert-base-uncased")

    def generate_text(self, input_text: str) -> str:
        # Генерация текста с помощью GPT-2
        inputs = self.tokenizer.encode(input_text, return_tensors="pt")
        outputs = self.model.generate(inputs, max_length=50, num_return_sequences=1)
        generated_text = self.tokenizer.decode(outputs[0])
        return generated_text

    def classify_text(self, input_text: str) -> int:
        # Классификация текста с помощью BERT
        inputs = self.tokenizer.encode(input_text, return_tensors="pt")
        labels = torch.tensor([1]).unsqueeze(0)  # Указываем метку для задачи классификации
        outputs = self.bert_model(inputs, labels=labels)
        classification = outputs.logits.argmax(-1).item()
        return classification

adaptive_learning_instance = AdaptiveLearning()