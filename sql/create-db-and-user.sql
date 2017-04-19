CREATE DATABASE project_manager DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;
CREATE USER 'project_manager_user'@'localhost' IDENTIFIED BY 'project_manager_password';
GRANT ALL PRIVILEGES ON project_manager.* TO 'project_manager_user'@'localhost';
FLUSH PRIVILEGES;