# Login and Team Page Test Report

## Project

Grand Prix Ecosystem Team 1

## Feature

Login Restyling Bootstrap

## Tester

Mahmudul Hasan Rafid Khan

## Role

Dev 2

## Test Date

6 August 2026

## Environment

Deployed web application

## 1. Login to Team Page Flow

| Test ID | Test Scenario | Expected Result | Result |
|---|---|---|---|
| T01 | Enter valid login credentials | User is successfully authenticated | Pass |
| T02 | Complete the login process | User is redirected to the Team Page | Pass |
| T03 | View the Team Page after login | Team member information is displayed correctly | Pass |
| T04 | View team member photo | Team member photo displays correctly | Pass |
| T05 | View team member role and blurb | Role and blurb display correctly | Pass |
| T06 | View long profile text | Long text displays without breaking the page layout | Pass |

## 2. Edge Case Testing

| Test ID | Test Scenario | Expected Result | Result |
|---|---|---|---|
| T07 | Enter invalid login credentials | Login fails and the user is not authenticated | Pass |
| T08 | Access the Team Page without authentication | Unauthenticated users cannot access the protected page | Pass |
| T09 | Team member has no photo | Page remains functional and the layout does not break | Pass |
| T10 | Team member has unusually long text | Text remains readable and does not break the layout | Pass |

## 3. Defects Identified

No blocking defects were identified during the testing performed.

## 4. Overall Result

The login to Team Page flow was successfully tested along with the defined edge cases. All tested scenarios passed without any outstanding issues requiring developer fixes.

## 5. Supporting Evidence

GitHub Pull Request:

https://github.com/Grand-Prix-Ecosystem-Team-1/GrandPrixEcosystem-Team1/pull/11

## 6. Tester Sign Off

**Tester:** Mahmudul Hasan Rafid Khan

**Role:** Dev 2

**Status:** Testing completed