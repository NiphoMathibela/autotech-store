-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS autotech_store;
USE autotech_store;

-- Users table
CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    firstName VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    role ENUM('user', 'admin') DEFAULT 'user',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Categories table
CREATE TABLE IF NOT EXISTS Categories (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    image VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Products table
CREATE TABLE IF NOT EXISTS Products (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image VARCHAR(255) NOT NULL,
    categoryId VARCHAR(50) NOT NULL,
    brand VARCHAR(100),
    partNumber VARCHAR(100),
    stock INT NOT NULL DEFAULT 0,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (categoryId) REFERENCES Categories(id) ON DELETE CASCADE
);

-- Orders table
CREATE TABLE IF NOT EXISTS Orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    status ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
    total DECIMAL(10, 2) NOT NULL,
    shippingAddress TEXT NOT NULL,
    paymentStatus ENUM('pending', 'paid', 'failed') DEFAULT 'pending',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE
);

-- Order Items table
CREATE TABLE IF NOT EXISTS OrderItems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    orderId INT NOT NULL,
    productId VARCHAR(50) NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (orderId) REFERENCES Orders(id) ON DELETE CASCADE,
    FOREIGN KEY (productId) REFERENCES Products(id) ON DELETE CASCADE
);

-- Insert sample categories
INSERT INTO Categories (id, name, description, image) VALUES
('engine-parts', 'Engine Parts', 'Complete engine parts and components', '/images/categories/engine.jpg'),
('brakes', 'Brakes', 'Brake pads, rotors, and brake systems', '/images/categories/brakes.jpg'),
('suspension', 'Suspension', 'Suspension and steering components', '/images/categories/suspension.jpg'),
('electrical', 'Electrical', 'Batteries, alternators, and electrical components', '/images/categories/electrical.jpg'),
('transmission', 'Transmission', 'Transmission and drivetrain components', '/images/categories/transmission.jpg'),
('exhaust', 'Exhaust System', 'Exhaust pipes, mufflers, and catalytic converters', '/images/categories/exhaust.jpg'),
('cooling', 'Cooling System', 'Radiators, fans, and cooling components', '/images/categories/cooling.jpg'),
('accessories', 'Accessories', 'Car accessories and add-ons', '/images/categories/accessories.jpg');

-- Insert sample admin user (password: admin123)
INSERT INTO Users (email, password, firstName, lastName, role) VALUES
('admin@autotech.com', '$2a$10$XFE/UQEe6c5QDyKwzxbXB.ywY9sGQy.JxJ8L.ga9UPtYoHhYs6ZK2', 'Admin', 'User', 'admin');

-- Insert sample products
INSERT INTO Products (id, name, description, price, image, categoryId, brand, partNumber, stock) VALUES
('brake-pad-1', 'Premium Brake Pads', 'High-performance ceramic brake pads for optimal braking', 89.99, '/images/products/brake-pads.jpg', 'brakes', 'BrakeTech', 'BT-2024-01', 50),
('oil-filter-1', 'Oil Filter', 'Premium oil filter for enhanced engine protection', 12.99, '/images/products/oil-filter.jpg', 'engine-parts', 'FilterPro', 'FP-1010', 100),
('battery-1', 'Car Battery 12V', 'High-capacity 12V automotive battery', 129.99, '/images/products/battery.jpg', 'electrical', 'PowerMax', 'PM-12V-60', 30),
('spark-plug-1', 'Spark Plugs Set', 'Set of 4 high-performance spark plugs', 24.99, '/images/products/spark-plugs.jpg', 'engine-parts', 'SparkMaster', 'SM-SP4', 75);
