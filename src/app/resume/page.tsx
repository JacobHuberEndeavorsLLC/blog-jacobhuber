import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto p-8 sm:p-12">
      {/* Resume Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">Jacob Huber</h1>
        <p>(636) 284-0428 (Mobile) · hello@jacobhuber.me</p>
      </div>

      {/* Separator */}
      <Separator className="my-8" />

      {/* About Me */}
      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            I am an experienced Software Engineer with a strong background in custom development, data management, and API integration, working within the Professional Services team at symplr. I specialize in designing and implementing client-specific solutions that involve importing/exporting data, crafting business logic, and consulting on API best practices.
          </p>
          <p>
            With expertise in C#, SQL databases, and REST APIs, I excel in creating and maintaining systems that solve real-world business problems. I am also skilled in client communication, providing support and troubleshooting for technical issues. My ability to manage multiple projects simultaneously, while working independently with minimal oversight, sets me apart in fast-paced environments.
          </p>
        </CardContent>
      </Card>

      {/* Separator */}
      <Separator className="my-8" />

      {/* Work Experience Accordion */}
      <Card>
        <CardHeader>
          <CardTitle>Work Experience</CardTitle>
        </CardHeader>
        <CardContent>
      <Accordion type="single" collapsible>
        <AccordionItem value="symplr">
          <AccordionTrigger>Software Engineer, symplr (January 2024 - Present)</AccordionTrigger>
          <AccordionContent>
          <p>
            As a Software Engineer at symplr, I work within the Professional Services team, specializing in custom development projects. My primary responsibilities include developing and maintaining complex systems that involve data importing, exporting, and client-specific business logic implementation. I code and manage solutions that address unique business requirements, ensuring that our applications meet the specific needs of our clients.
          </p>
          <p>
            Additionally, I serve as the API consultant for one of our core applications, collaborating directly with clients to help them access, integrate, and fully utilize our APIs. I provide guidance on API best practices and troubleshoot API-related issues to ensure seamless integration with our systems.
          </p>
          <p>
            I independently manage multiple projects simultaneously, effectively juggling client deadlines, project deliverables, and technical challenges with minimal oversight. My role requires a blend of technical expertise, client communication, and problem-solving to deliver tailored solutions on time and within scope.
          </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="support-specialist">
          <AccordionTrigger>Technical Support Specialist, symplr (October 2020 - February 2024)</AccordionTrigger>
          <AccordionContent>
            <p>
              Provided functional and technical expertise, performed investigations of front-end applications, shadowed end users,
              and documented knowledge transfer materials for incident resolution.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="cerner">
          <AccordionTrigger>Technical Solutions Analyst, Cerner (February 2019 - March 2020)</AccordionTrigger>
          <AccordionContent>
            <p>
              Managed technical troubleshooting for Cerner’s software solutions, prioritized issue resolutions, and maintained
              documentation to ensure seamless application maintenance.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="chipotle">
          <AccordionTrigger>General Manager, Chipotle (June 2012 - August 2017)</AccordionTrigger>
          <AccordionContent>
            <p>
              Led a restaurant team in successful day-to-day operations, oversaw the training and development of employees, and
              managed P&L statements, budgets, and cost controls.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </CardContent>
      </Card>

      {/* Separator */}
      <Separator className="my-8" />

      {/* Education */}
      <Card>
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between">
            <div>
              <p className="font-semibold">Columbia College</p>
              <p>Management Information Systems</p>
            </div>
            <p>2017 - 2018</p>
          </div>
          <div className="flex justify-between mt-4">
            <div>
              <p className="font-semibold">Columbia College</p>
              <p>Associate of Arts - AA</p>
            </div>
            <p>2012 - 2014</p>
          </div>
        </CardContent>
      </Card>

      {/* Separator */}
      <Separator className="my-8" />

      {/* Skills */}
      <Card>
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            {/* Technical Skills */}
            <li>REST APIs (Design & Integration)</li>
            <li>SQL Database Management & Querying</li>
            <li>C# (Custom Development)</li>
            <li>Data Importing & Exporting</li>
            <li>Business Logic Implementation</li>
            <li>API Consulting & Client Support</li>
            <li>Visual Studio & .NET Framework</li>
            <li>Version Control (Git, GitHub)</li>

            {/* Soft Skills */}
            <li>Project Management & Multitasking</li>
            <li>Client Communication & Collaboration</li>
            <li>Problem Solving & Troubleshooting</li>
            <li>Independent Work with Minimal Oversight</li>
            <li>Time Management & Prioritization</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}