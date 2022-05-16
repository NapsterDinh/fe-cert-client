import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Container, Col, Button } from "@themesberg/react-bootstrap";

const dataTest = {
    id: '123',
    title: 'FE Exam 1 (Morning Session)',
    description: `<p><span style="color: rgb(67, 67, 67); font-size: 18px; font-family: Helvetica, sans-serif;">This course is a challenge related to Viblo Mayfest event, by achieve this course's certificate for the first time you will be mark as complete Viblo Learning challenge.</span></p>
    <p>
    <div class="md-contents" style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); width: 807px; font-family: &quot;Roboto Regular&quot;; letter-spacing: normal; line-height: 1.5; color: rgb(255, 255, 255); overflow: hidden; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-size: 14px;">
        <p style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); margin: 0px; padding: 0px; font-weight: normal; letter-spacing: -0.003em; word-break: break-word; overflow-wrap: break-word; color: rgb(103, 117, 141) !important; font-size: 1em;"><span style="color: rgb(102, 102, 102); font-size: 16px; font-family: Helvetica, sans-serif;">This Exam is based on the Morning session of origin FE exam. There would be 80 questions in total, which distribute largely in 3 sections:</span></p>
        <ul style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); margin: 1em 0px 0px; list-style: inside square; padding: 0px;">
            <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: nowrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="color: rgb(102, 102, 102); font-size: 16px; font-family: Helvetica, sans-serif;">Technology: 50 questions</span></li>
            <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: nowrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="color: rgb(102, 102, 102); font-size: 16px; font-family: Helvetica, sans-serif;">Management: 10 questio<span style="font-size: 1em;">ns</span></span></li>
            <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: nowrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="color: rgb(102, 102, 102); font-size: 16px; font-family: Helvetica, sans-serif;">Strategy: 20 questions.</span></li>
        </ul>
        <p style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); margin: 0.75rem 0px 0px; padding: 0px; font-weight: normal; letter-spacing: -0.003em; word-break: break-word; overflow-wrap: break-word; color: rgb(103, 117, 141) !important; font-size: 1em;"><span style="color: rgb(102, 102, 102); font-size: 16px; font-family: Helvetica, sans-serif;">All questions are in single-choice question type. Candidate is considered as "Passed" if he/she has more than 60% of right answers, which means more than 48 questions.</span></p>
    </div>
    <div class="ant-row my-4 text-sm flex flex-col" style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); position: relative; height: auto; margin-right: 0px; margin-left: 0px; zoom: 1; display: block; color: rgba(27, 27, 27, 0.65); font-family: Roboto, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; -webkit-box-orient: vertical !important; -webkit-box-direction: normal !important; flex-direction: column !important; margin-top: 1rem !important; margin-bottom: 1rem !important; font-size: 0.875rem;">
        <div class="mb-2" style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); margin-bottom: 0.5rem !important;">
            <div style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); font-size: 0.875rem;"><span style="color: rgb(102, 102, 102); font-size: 16px; font-family: Helvetica, sans-serif;">Rules:</span></div>
            <div class="text-red-400" style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); color: rgb(252, 129, 129) !important;"><span style="color: rgb(224, 102, 102); font-size: 16px; font-family: Helvetica, sans-serif;">-Maximum number of tests:100</span></div>
        </div>
    </div>
    </p>`,
    status: 'Public',
    slug: 'fe-exam1-morning-session',
    examsList: [
        {
            id:'1',
            title: 'Basic Theory',
            weight: 15,
            questions: 284,
            slug: '/basic-theory',
            description: `<p style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); margin: 0px; padding: 0px; color: rgb(103, 117, 141); font-weight: 400; letter-spacing: -0.003em; word-break: break-word; overflow-wrap: break-word; white-space: pre-wrap; font-family: &quot;Roboto Regular&quot;; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-size: 14px;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">This objective is to check candidate's knowledge in the field of basic theory.</span></p>
            <p style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); margin: 0.75rem 0px 0px; padding: 0px; color: rgb(103, 117, 141); font-weight: 400; letter-spacing: -0.003em; word-break: break-word; overflow-wrap: break-word; white-space: pre-wrap; font-family: &quot;Roboto Regular&quot;; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-size: 14px;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Key Knowledge Areas:</span></p>
            <p style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); margin: 0.75rem 0px 0px; padding: 0px; color: rgb(103, 117, 141); font-weight: 400; letter-spacing: -0.003em; word-break: break-word; overflow-wrap: break-word; white-space: pre-wrap; font-family: &quot;Roboto Regular&quot;; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-size: 14px;"><strong style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); font-weight: bolder; margin: 0px; padding: 0px; font-size: 16px; font-family: Helvetica, sans-serif;">1. Basic theory</strong></p>
            <ul style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); margin: 1em 0px 0px; list-style: inside square; padding: 0px; color: rgb(103, 117, 141); font-family: &quot;Roboto Regular&quot;; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-size: 14px;">
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Discrete Mathematics</span></li>
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Applied Mathematics</span></li>
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Theory about information</span></li>
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Theory of communications</span></li>
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Theory of measurement and control</span></li>
            </ul>
            <ol start="2" style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); margin: 1em 0px 0px; list-style: inside decimal; padding: 0px; color: rgb(103, 117, 141); font-family: &quot;Roboto Regular&quot;; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-size: 14px;">
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; white-space: pre-wrap; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Algorithm and programming</span></li>
            </ol>
            <ul style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); margin: 1em 0px 0px; list-style: inside square; padding: 0px; color: rgb(103, 117, 141); font-family: &quot;Roboto Regular&quot;; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-size: 14px;">
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Data structure:</span></li>
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Algorithm</span></li>
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Programming</span></li>
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Programming Languages</span></li>
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Other languages</span></li>
            </ul>`,
            status: 'Done'
        },
        {
            id:'2',
            title: 'Basic Theory',
            weight: 15,
            questions: 284,
            slug: '/basic-theory',
            description: `<p style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); margin: 0px; padding: 0px; color: rgb(103, 117, 141); font-weight: 400; letter-spacing: -0.003em; word-break: break-word; overflow-wrap: break-word; white-space: pre-wrap; font-family: &quot;Roboto Regular&quot;; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-size: 14px;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">This objective is to check candidate's knowledge in the field of basic theory.</span></p>
            <p style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); margin: 0.75rem 0px 0px; padding: 0px; color: rgb(103, 117, 141); font-weight: 400; letter-spacing: -0.003em; word-break: break-word; overflow-wrap: break-word; white-space: pre-wrap; font-family: &quot;Roboto Regular&quot;; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-size: 14px;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Key Knowledge Areas:</span></p>
            <p style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); margin: 0.75rem 0px 0px; padding: 0px; color: rgb(103, 117, 141); font-weight: 400; letter-spacing: -0.003em; word-break: break-word; overflow-wrap: break-word; white-space: pre-wrap; font-family: &quot;Roboto Regular&quot;; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-size: 14px;"><strong style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); font-weight: bolder; margin: 0px; padding: 0px; font-size: 16px; font-family: Helvetica, sans-serif;">1. Basic theory</strong></p>
            <ul style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); margin: 1em 0px 0px; list-style: inside square; padding: 0px; color: rgb(103, 117, 141); font-family: &quot;Roboto Regular&quot;; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-size: 14px;">
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Discrete Mathematics</span></li>
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Applied Mathematics</span></li>
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Theory about information</span></li>
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Theory of communications</span></li>
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Theory of measurement and control</span></li>
            </ul>
            <ol start="2" style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); margin: 1em 0px 0px; list-style: inside decimal; padding: 0px; color: rgb(103, 117, 141); font-family: &quot;Roboto Regular&quot;; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-size: 14px;">
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; white-space: pre-wrap; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Algorithm and programming</span></li>
            </ol>
            <ul style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); margin: 1em 0px 0px; list-style: inside square; padding: 0px; color: rgb(103, 117, 141); font-family: &quot;Roboto Regular&quot;; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-size: 14px;">
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Data structure:</span></li>
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Algorithm</span></li>
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Programming</span></li>
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Programming Languages</span></li>
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Other languages</span></li>
            </ul>`,
            status: 'Done'
        },
        {
            id:'1',
            title: 'Basic Theory',
            weight: 15,
            questions: 284,
            slug: '/basic-theory',
            description: `<p style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); margin: 0px; padding: 0px; color: rgb(103, 117, 141); font-weight: 400; letter-spacing: -0.003em; word-break: break-word; overflow-wrap: break-word; white-space: pre-wrap; font-family: &quot;Roboto Regular&quot;; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-size: 14px;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">This objective is to check candidate's knowledge in the field of basic theory.</span></p>
            <p style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); margin: 0.75rem 0px 0px; padding: 0px; color: rgb(103, 117, 141); font-weight: 400; letter-spacing: -0.003em; word-break: break-word; overflow-wrap: break-word; white-space: pre-wrap; font-family: &quot;Roboto Regular&quot;; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-size: 14px;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Key Knowledge Areas:</span></p>
            <p style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); margin: 0.75rem 0px 0px; padding: 0px; color: rgb(103, 117, 141); font-weight: 400; letter-spacing: -0.003em; word-break: break-word; overflow-wrap: break-word; white-space: pre-wrap; font-family: &quot;Roboto Regular&quot;; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-size: 14px;"><strong style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); font-weight: bolder; margin: 0px; padding: 0px; font-size: 16px; font-family: Helvetica, sans-serif;">1. Basic theory</strong></p>
            <ul style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); margin: 1em 0px 0px; list-style: inside square; padding: 0px; color: rgb(103, 117, 141); font-family: &quot;Roboto Regular&quot;; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-size: 14px;">
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Discrete Mathematics</span></li>
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Applied Mathematics</span></li>
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Theory about information</span></li>
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Theory of communications</span></li>
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Theory of measurement and control</span></li>
            </ul>
            <ol start="2" style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); margin: 1em 0px 0px; list-style: inside decimal; padding: 0px; color: rgb(103, 117, 141); font-family: &quot;Roboto Regular&quot;; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-size: 14px;">
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; white-space: pre-wrap; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Algorithm and programming</span></li>
            </ol>
            <ul style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); margin: 1em 0px 0px; list-style: inside square; padding: 0px; color: rgb(103, 117, 141); font-family: &quot;Roboto Regular&quot;; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-size: 14px;">
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Data structure:</span></li>
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Algorithm</span></li>
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Programming</span></li>
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Programming Languages</span></li>
                <li style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: rgb(226, 232, 240); white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word; margin-bottom: 0.5em; font-size: 1em;"><span style="font-size: 16px; font-family: Helvetica, sans-serif;">Other languages</span></li>
            </ul>`,
            status: 'Done'
        }
    ]
}
const ExamPage = () => {
  const [data, setData] = useState("");
  const { slugSection } = useParams();
  const location = useLocation();

  useEffect(() => {
    setData(dataTest);
  }, []);

  return (
    <Container className="d-flex container-card">
      <Col className="layout-container-body exam">
        <ExamList data={data} location={location} />
      </Col>
      <Col className="layout-container-top exam">
        <div className="practice-all-exam">
          <h1 className="text-center">{data?.title}</h1>
          <div className="tag-container"></div>
          <div className='exam-description' dangerouslySetInnerHTML={{ __html: data?.description }}></div>
          <div className="text-center">
            <Button variant="primary" onClick={() => window.location = '/exams/fe-exam1-morning-session/attempt'} className='test-now'>Test now</Button>
          </div>
          
        </div>
        <p className="text-center practice-below">Or practice with each objective below</p>
        <ul className="practice-with-each-section">
            {
                data?.examsList?.map((item, index) => (
                    <PracticeItem key={item.id} item={item} index={index} />
                ))
            }
        </ul>
        <div className="text-center mb-4 x">
            <Button variant="primary" className='make-full'>Make full practice</Button>
          </div>
      </Col>
    </Container>
  );
};

const ExamList = ({ data, location }) => {
  return (
    <div className="sticky-sidebar">
      <div class="post-index hidden-sm-down">
        <div class="section-title-line">
          <h5 class="text-uppercase">Exam List</h5>
          <hr class="filler-line"></hr>
        </div>
        <h5>{data.title}</h5>
        <ul class="content-outline list-unstyled">
            {
                data?.examsList?.map((item, index) => (
                    <li key={item.id} class="content-outline__item content-outline__item--level-3">
                        <a href={`#exams-item${index}`} class="link">
                        {item.title}
                        </a>
                    </li>
                ))
            }
        </ul>
        <h5>Get Certificate</h5>
      </div>
    </div>
  );
};

const PracticeItem = ({ item, index }) => {
  return (
    <li className="practice-item" id={`exams-item${index}`}>
      <h5>{item?.title}</h5>
      <div className="d-flex justify-content-between practice-item-top">
        <div className="practice-weight">Weight: {item?.weight}%</div>
        <div className="practice-count-question">Questions (En):{item?.questions}</div>
        <Button variant="secondary" className='practice-now' onClick={() => window.location = item?.slug}>Practice</Button>
      </div>
      <div class="md-contents" dangerouslySetInnerHTML={{ __html: item?.description }}></div>
    </li>
  );
};

export default ExamPage;
