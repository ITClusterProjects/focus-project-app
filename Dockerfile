# Використовуємо офіційний Node.js образ
FROM node:20-alpine AS base

# Встановлюємо робочу директорію
WORKDIR /app

# Копіюємо package.json і встановлюємо залежності
COPY package*.json ./
RUN npm install --production --ignore-scripts

# Копіюємо увесь код
COPY . .

# Будуємо Next.js проєкт
RUN npm run build

# Вказуємо порт (Next.js слухає 3000)
EXPOSE 3000

# Запускаємо додаток
CMD ["npm", "start"]
