CREATE DATABASE IF NOT EXISTS project_manager DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;
CREATE USER IF NOT EXISTS 'project_manager_user'@'%' IDENTIFIED BY 'project_manager_password';
GRANT ALL PRIVILEGES ON project_manager.* TO 'project_manager_user'@'%';
FLUSH PRIVILEGES;