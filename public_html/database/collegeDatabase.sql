-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 13, 2013 at 04:40 PM
-- Server version: 5.5.9
-- PHP Version: 5.3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Database: `collegeData`
--

-- --------------------------------------------------------

--
-- Table structure for table `lecturerTable`
--

CREATE TABLE `lecturerTable` (
  `staffNumber` int(6) NOT NULL,
  `firstName` varchar(10) NOT NULL,
  `lastName` varchar(15) NOT NULL,
  `moduleNo1` int(6) NOT NULL,
  `moduleNo2` int(6) NOT NULL,
  `email` varchar(30) NOT NULL,
  `phoneNo` int(6) NOT NULL,
  PRIMARY KEY (`staffNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='This table contains all lecturer records for the example database.';

--
-- Dumping data for table `lecturerTable`
--

INSERT INTO `lecturerTable` VALUES(123001, 'Charlie', 'Cullen', 999001, 999003, 'charlie@here.com', 123450);
INSERT INTO `lecturerTable` VALUES(123002, 'Hugh', 'McAtamney', 999002, 999009, 'hugh@there.com', 123400);
INSERT INTO `lecturerTable` VALUES(123003, 'Keith', 'Gardiner', 999006, 999008, 'keith@there.com', 123000);
INSERT INTO `lecturerTable` VALUES(123004, 'Paula', 'McGloin', 999004, 999005, 'paula@there.com', 120000);
INSERT INTO `lecturerTable` VALUES(123005, 'James', 'Wogan', 999007, 999010, 'james@there.com', 100000);

-- --------------------------------------------------------

--
-- Table structure for table `moduleTable`
--

CREATE TABLE `moduleTable` (
  `moduleNo` int(6) NOT NULL,
  `moduleName` varchar(30) NOT NULL,
  `credits` int(2) NOT NULL,
  `website` varchar(30) NOT NULL,
  `dueDate` date NOT NULL,
  `location` varchar(25) NOT NULL,
  `room` varchar(10) NOT NULL,
  `lat` varchar(20) NOT NULL,
  `long` varchar(20) NOT NULL,
  `college` varchar(60) NOT NULL,
  PRIMARY KEY (`moduleNo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='This table contains all module records for the example database.';

--
-- Dumping data for table `moduleTable`
--

INSERT INTO `moduleTable` VALUES(999001, 'Dynamic Web Development', 15, 'www.dynWeb.ie', '2013-05-14', 'Aungier Street', '4037', '53.338545', '-6.26607', 'College of Arts and Tourism');
INSERT INTO `moduleTable` VALUES(999002, 'Human Computer Interaction', 10, 'www.hci.ie', '2013-04-09', 'Aungier Street', '2005', '53.338545', '-6.26607', 'College of Arts and Tourism');
INSERT INTO `moduleTable` VALUES(999003, 'Introduction to Programming', 15, 'www.jscriptIntro.ie', '2013-01-11', 'Kevin Street', '1045', '53.337015', '-6.267933', 'College of Business');
INSERT INTO `moduleTable` VALUES(999004, 'Design Principles', 15, 'www.designIntro.ie', '2013-04-25', 'Bolton Street', '0130', '53.351406', '-6.268724', 'College of Engineering and Built Environment');
INSERT INTO `moduleTable` VALUES(999005, 'Design Practice', 10, 'www.designPract.ie', '2013-01-11', 'Cathal Brugha Street', '0123', '53.352044', '-6.259514', 'College of Sciences and Health');
INSERT INTO `moduleTable` VALUES(999006, 'Digital Audio', 10, 'www.dspAudio.com', '2013-05-10', 'Aungier Street', '3025', '53.338545', '-6.26607', 'College of Arts and Tourism');
INSERT INTO `moduleTable` VALUES(999007, 'Digital Signal Processing', 10, 'www.dspGeneral.ie', '2013-04-04', 'Kevin Street', '2103', '53.337015', '-6.267933', 'College of Business');
INSERT INTO `moduleTable` VALUES(999008, 'History of Digital Media', 5, 'www.itsbeendone.ie', '2013-03-28', 'Aungier Street', '0120', '53.338545', '-6.26607', 'College of Arts and Tourism');
INSERT INTO `moduleTable` VALUES(999009, 'Digital Asset Management', 5, 'www.contentStore.ie', '2013-05-30', 'Bolton Street', '1004', '53.351406', '-6.268724', 'College of Engineering and Built Environment');
INSERT INTO `moduleTable` VALUES(999010, 'Production Skills', 10, 'www.webDevPro.ie', '2013-04-02', 'Aungier Street', '1089', '53.338545', '-6.26607', 'College of Arts and Tourism');

-- --------------------------------------------------------

--
-- Table structure for table `studentTable`
--

CREATE TABLE `studentTable` (
  `studentID` int(6) NOT NULL,
  `firstName` varchar(10) NOT NULL,
  `lastName` varchar(15) NOT NULL,
  `moduleNo1` int(6) NOT NULL,
  `moduleNo2` int(6) NOT NULL,
  `courseID` int(6) NOT NULL,
  PRIMARY KEY (`studentID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='This table contains all student records for the example database.';

--
-- Dumping data for table `studentTable`
--

INSERT INTO `studentTable` VALUES(123, 'Kermit', 'Frog', 999003, 999008, 888001);
INSERT INTO `studentTable` VALUES(124, 'Gonzo', 'Great', 999001, 999009, 888001);
INSERT INTO `studentTable` VALUES(125, 'Cookie', 'Monster', 999004, 999005, 888002);
INSERT INTO `studentTable` VALUES(126, 'Fozzie', 'Bear', 999006, 999010, 888001);
INSERT INTO `studentTable` VALUES(127, 'Bunsen', 'Honeydew', 999007, 999009, 888003);
INSERT INTO `studentTable` VALUES(128, 'Miss', 'Piggy', 999002, 999003, 888003);
INSERT INTO `studentTable` VALUES(129, 'Gobo', 'Fraggle', 999008, 999010, 888002);
INSERT INTO `studentTable` VALUES(130, 'Mokey', 'Fraggle', 999002, 999005, 888001);
INSERT INTO `studentTable` VALUES(131, 'Red', 'Fraggle', 999006, 999008, 888003);
INSERT INTO `studentTable` VALUES(132, 'Wembley', 'Fraggle', 999004, 999007, 888003);
INSERT INTO `studentTable` VALUES(133, 'Travelling', 'Matt', 999002, 999003, 888002);
INSERT INTO `studentTable` VALUES(134, 'Convincing', 'John', 999004, 999008, 888001);
INSERT INTO `studentTable` VALUES(135, 'Cotterpin', 'Doozer', 999008, 999009, 888002);
INSERT INTO `studentTable` VALUES(136, 'Judge', 'Dog', 999003, 999007, 888003);
INSERT INTO `studentTable` VALUES(137, 'Doctor', 'Astro', 999005, 999001, 888001);
INSERT INTO `studentTable` VALUES(138, 'Sneaky', 'Snake', 999006, 999008, 888002);
INSERT INTO `studentTable` VALUES(139, 'Sunni', 'Gummi', 999009, 999010, 888002);
INSERT INTO `studentTable` VALUES(140, 'Cubbi', 'Gummi', 999004, 999008, 888001);
INSERT INTO `studentTable` VALUES(141, 'Papa', 'Smurf', 999008, 999009, 888003);
INSERT INTO `studentTable` VALUES(142, 'Lazy', 'Smurf', 999001, 999002, 888001);
INSERT INTO `studentTable` VALUES(143, 'Vanity', 'Smurf', 999008, 999010, 888002);
INSERT INTO `studentTable` VALUES(144, 'Joe', 'Frasier', 999004, 999006, 888003);
INSERT INTO `studentTable` VALUES(145, 'Muhammad', 'Ali', 999003, 999005, 888002);
INSERT INTO `studentTable` VALUES(146, 'George', 'Foreman', 999002, 999003, 888001);
INSERT INTO `studentTable` VALUES(147, 'Larry', 'Holmes', 999001, 999002, 888001);
INSERT INTO `studentTable` VALUES(148, 'Marvin', 'Hagler', 999004, 999005, 888003);
INSERT INTO `studentTable` VALUES(149, 'John', 'Coltrane', 999002, 999006, 888002);
INSERT INTO `studentTable` VALUES(150, 'Sonny', 'Rawlins', 999009, 999010, 888002);
INSERT INTO `studentTable` VALUES(151, 'Coleman', 'Hawkins', 999006, 999007, 888003);
INSERT INTO `studentTable` VALUES(152, 'Wes', 'Montgomery', 999002, 999004, 888001);
INSERT INTO `studentTable` VALUES(153, 'Joe', 'Pass', 999006, 999009, 888001);
INSERT INTO `studentTable` VALUES(154, 'Charlie', 'Christian', 999008, 999010, 888002);
INSERT INTO `studentTable` VALUES(155, 'Stanley', 'Jordan', 999004, 999007, 888003);
INSERT INTO `studentTable` VALUES(156, 'Rory', 'Gallagher', 999006, 999009, 888003);
INSERT INTO `studentTable` VALUES(157, 'Gary', 'Moore', 999001, 999008, 888002);
INSERT INTO `studentTable` VALUES(158, 'Jimi', 'Hendrix', 999004, 999008, 888001);
INSERT INTO `studentTable` VALUES(159, 'Paco', 'Pena', 999005, 999009, 888003);
INSERT INTO `studentTable` VALUES(160, 'Andres', 'Segovia', 999003, 999007, 888003);
INSERT INTO `studentTable` VALUES(161, 'Bootsy', 'Collins', 999004, 999005, 888002);
INSERT INTO `studentTable` VALUES(162, 'George', 'Clinton', 999003, 999010, 888002);

-- --------------------------------------------------------

--
-- Table structure for table `artCollegeTable`
--

CREATE TABLE `artCollegeTable` (
  `name` varchar(50) NOT NULL,
  `website` varchar(80) NOT NULL,
  `address` varchar(25) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='This table contains all art college records for the example database.';

--
-- Dumping data for table `artCollegeTable`
--

INSERT INTO `artCollegeTable` VALUES('Art Design and Printing', 'http://adp.dit.ie/artdesignprinting', 'Aungier Street');
INSERT INTO `artCollegeTable` VALUES('Culinary Arts and Food Technology', 'http://www.dit.ie/culinaryartsandfoodtechnology', 'Aungier Street');
INSERT INTO `artCollegeTable` VALUES('Hospitality Management and Tourism', 'http://www.dit.ie/colleges/collegeofartstourism/collegeofartstourism-schools', 'Aungier Street');
INSERT INTO `artCollegeTable` VALUES('Languages, Law and Society', 'http://www.dit.ie/colleges/collegeofartstourism/schooloflanguageslawsociety', 'Aungier Street');
INSERT INTO `artCollegeTable` VALUES('Media', 'http://www.istory.ie', 'Aungier Street');
INSERT INTO `artCollegeTable` VALUES('Music and Drama', 'http://www.dit.ie/conservatory', 'Aungier Street');

-- --------------------------------------------------------

--
-- Table structure for table `engineeringCollegeTable`
--

CREATE TABLE `engineeringCollegeTable` (
  `name` varchar(50) NOT NULL,
  `website` varchar(80) NOT NULL,
  `address` varchar(25) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='This table contains all engineering college records for the example database.';

--
-- Dumping data for table `engineeringCollegeTable`
--

INSERT INTO `engineeringCollegeTable` VALUES('Architecture', 'http://www.dit.ie/architecture', 'Bolton Street');
INSERT INTO `engineeringCollegeTable` VALUES('Civil Engineering', 'http://www.dit.ie/civilengineering', 'Bolton Street');
INSERT INTO `engineeringCollegeTable` VALUES('Electrical and Electronic Engineering', 'http://www.dit.ie/electricalelectronicengineering', 'Bolton Street');
INSERT INTO `engineeringCollegeTable` VALUES('Mechanical and Design Engineering', 'http://www.dit.ie/http://www.dit.ie/mechanicalanddesignengineering', 'Bolton Street');
INSERT INTO `engineeringCollegeTable` VALUES('Multidisciplinary Technologies', 'http://www.dit.ie/multi-disciplinarytechnologies', 'Bolton Street');
INSERT INTO `engineeringCollegeTable` VALUES('Surveying and Construction Management', 'http://www.dit.ie/surveyingconstructionmanagement', 'Bolton Street');
INSERT INTO `engineeringCollegeTable` VALUES('Spatial Planning and Transport Engineering', 'http://www.dit.ie/spatialplanningtransportengineering', 'Bolton Street');

-- --------------------------------------------------------

--
-- Table structure for table `businessCollegeTable`
--

CREATE TABLE `businessCollegeTable` (
  `name` varchar(50) NOT NULL,
  `website` varchar(80) NOT NULL,
  `address` varchar(25) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='This table contains all business college records for the example database.';

--
-- Dumping data for table `businessCollegeTable`
--

INSERT INTO `businessCollegeTable` VALUES('Accounting and Finance', 'http://www.dit.ie/accountingandfinance', 'Kevin Street');
INSERT INTO `businessCollegeTable` VALUES('Graduate Business School', 'http://www.dit.ie/graduatebusinessschool', 'Kevin Street');
INSERT INTO `businessCollegeTable` VALUES('Management', 'http://www.dit.ie/management', 'Kevin Street');
INSERT INTO `businessCollegeTable` VALUES('Marketing', 'http://www.dit.ie/marketing', 'Kevin Street');
INSERT INTO `businessCollegeTable` VALUES('Retail and Services Management', 'http://www.dit.ie/retailandservicesmanagement', 'Kevin Street');

-- --------------------------------------------------------

--
-- Table structure for table `scienceCollegeTable`
--

CREATE TABLE `scienceCollegeTable` (
  `name` varchar(50) NOT NULL,
  `website` varchar(80) NOT NULL,
  `address` varchar(25) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='This table contains all science college records for the example database.';

--
-- Dumping data for table `scienceCollegeTable`
--

INSERT INTO `scienceCollegeTable` VALUES('Biological Sciences', 'http://www.dit.ie/biologicalsciences', 'Cathal Brugha Street');
INSERT INTO `scienceCollegeTable` VALUES('Chemical and Pharmaceutical Sciences', 'http://www.dit.ie/chemistry', 'Cathal Brugha Street');
INSERT INTO `scienceCollegeTable` VALUES('Computing', 'http://www.dit.ie/computing', 'Cathal Brugha Street');
INSERT INTO `scienceCollegeTable` VALUES('Food Science and Environmental Health', 'http://www.dit.ie/fseh', 'Cathal Brugha Street');
INSERT INTO `scienceCollegeTable` VALUES('Mathematical Sciences', 'http://www.maths.dit.ie', 'Cathal Brugha Street');
INSERT INTO `scienceCollegeTable` VALUES('Physics', 'http://www.dit.ie/physics', 'Cathal Brugha Street');

-- --------------------------------------------------------

--
-- Table structure for table `collegesTable`
--

CREATE TABLE `collegesTable` (
  `name` varchar(50) NOT NULL,
  `lat` varchar(20) NOT NULL,
  `lon` varchar(20) NOT NULL,
  `website` varchar(80) NOT NULL,
  `address` varchar(25) NOT NULL,
  PRIMARY KEY (`address`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='This table contains all colleges records for the example database.';

--
-- Dumping data for table `collegesTable`
--

INSERT INTO `collegesTable` VALUES('College of Arts and Tourism', '53.338545', '-6.26607', 'http://http://www.dit.ie/colleges/college-of-arts--tourism', 'Aungier Street');
INSERT INTO `collegesTable` VALUES('College of Engineering and Built Environment', '53.351406', '-6.268724', 'http://www.dit.ie/colleges/college-of-engineering--built-environment/', 'Bolton Street');
INSERT INTO `collegesTable` VALUES('College of Business', '53.337015', '-6.267933', 'http://www.dit.ie/colleges/college-of-business', 'Kevin Street');
INSERT INTO `collegesTable` VALUES('College of Sciences and Health', '53.352044', '-6.259514', 'http://www.dit.ie/colleges/college-of-sciences-and-health', 'Cathal Brugha Street');


-- --------------------------------------------------------

--
-- Table structure for table `librariesTable`
--

CREATE TABLE `librariesTable` (
  `title` varchar(60) NOT NULL,
  `catNo` int(4) NOT NULL,
  `year` int(4) NOT NULL,
  `author` varchar(30) NOT NULL,
  `KevinStr` int(3) NOT NULL,
  `AungierStr` int(3) NOT NULL,
  `BoltonStr` int(3) NOT NULL,
  `CathalBrughaStr` int(3) NOT NULL,
  PRIMARY KEY (`title`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='This table contains all libraries records for the example database.';

--
-- Dumping data for table `librariesTable`
--

INSERT INTO `librariesTable` VALUES('Clean Code', 1000, 2009, 'Robert Martin', 5, 3, 8, 6);
INSERT INTO `librariesTable` VALUES('The C Programming Language', 1001, 1988, 'Brian Kernighan', 4, 0, 7, 1);
INSERT INTO `librariesTable` VALUES('Dont make me think', 1002, 2014, 'Steve Krug', 10, 4, 9, 4);
INSERT INTO `librariesTable` VALUES('The Clean Coder', 1003, 2011, 'Robert Martin', 2, 0, 1, 0);
INSERT INTO `librariesTable` VALUES('Beautiful Data', 1004, 2009, 'OReilly', 3, 4, 1, 6);
INSERT INTO `librariesTable` VALUES('The Design of Everyday Things', 1005, 1982, 'Don Norman', 7, 7, 0, 3);
INSERT INTO `librariesTable` VALUES('The Inmates are Running the Asylum', 1006, 1999, 'Alan Cooper', 2, 0, 0, 1);
INSERT INTO `librariesTable` VALUES('JavaScript Patterns', 1007, 2010, 'OReilly', 1, 2, 1, 0);
INSERT INTO `librariesTable` VALUES('Learning Python', 1008, 2008, 'OReilly', 10, 3, 0, 0);
INSERT INTO `librariesTable` VALUES('Java Cookbook', 1009, 2007, 'OReilly', 10, 10, 8, 6);






